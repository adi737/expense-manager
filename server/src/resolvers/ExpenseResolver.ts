import { Arg, Ctx, Field, Float, InputType, Int, Mutation, ObjectType, Query, Resolver, UseMiddleware } from "type-graphql";
import { Expense } from "../entities/Expense";
import { clearErrors, setErrors, errors } from "../globals";
import { MyContext } from "../MyContext";
import { isAuth } from "../utils/isAuth";
import { Errors } from "./UserResolver";

@InputType()
class InputExpenseValues {
  @Field()
  category!: string;

  @Field()
  product!: string;

  @Field(() => Float)
  price!: number;
}

@ObjectType()
class ExpenseResponse {
  @Field(() => Expense, { nullable: true })
  expense?: Expense;

  @Field(() => [Errors], { nullable: true })
  errors?: Errors[];

  @Field(() => String, { nullable: true })
  auth?: string;
}

@ObjectType()
class ExpensesResponse {
  @Field(() => [Expense], { nullable: true })
  expenses?: Expense[];

  @Field(() => Boolean, { nullable: true })
  isMore?: boolean;

  @Field(() => String, { nullable: true })
  auth?: string;
}

@Resolver()
export class ExpenseResolver {
  @Query(() => ExpensesResponse)
  @UseMiddleware(isAuth)
  async expenses(
    @Ctx() { req }: MyContext,
    @Arg('limit', () => Int) limit: number,
    @Arg('skip', () => Int, { nullable: true }) skip?: number
  ): Promise<ExpensesResponse> {
    const realLimit = Math.min(limit, 50);
    const realLimitPlusOne = realLimit + 1;
    let isMore: boolean;
    let expenses: Expense[];

    if (!skip) {
      expenses = await Expense.find({
        where: { userId: req.session.userId },
        order: { createdAt: "DESC" },
        take: realLimitPlusOne
      });
    } else {
      expenses = await Expense.find({
        where: { userId: req.session.userId },
        order: { createdAt: "DESC" },
        skip,
        take: realLimitPlusOne
      });
    }

    expenses.length === realLimitPlusOne ?
      isMore = true
      :
      isMore = false

    return {
      expenses: expenses.slice(0, realLimit),
      isMore
    }
  }

  @Mutation(() => ExpenseResponse, { nullable: true })
  @UseMiddleware(isAuth)
  async addExpense(
    @Arg('options', () => InputExpenseValues) options: InputExpenseValues,
    @Ctx() { req }: MyContext
  ): Promise<ExpenseResponse | null> {
    const price = Number(options.price.toFixed(2));

    if (price <= 0) {
      clearErrors();
      setErrors({ field: 'price', message: 'Price must be greater than 0' });
      return { errors }
    }

    const expense = await Expense.create({
      ...options,
      price,
      userId: req.session.userId
    }).save();

    return { expense };
  }
}