import { Expense } from "../entities/Expense";
import { MyContext } from "../MyContext";
import { ExpensesResponse } from "../resolvers/ExpenseResolver";

export const chooseCategory = async (
  category: string,
  req: MyContext["req"],
  limit: number,
  offset?: number
): Promise<ExpensesResponse> => {
  const realLimit = Math.min(limit, 50);
  const realLimitPlusOne = realLimit + 1;
  let isMore: boolean;
  let expenses: Expense[];

  try {
    if (!offset) {
      expenses = await Expense.find({
        where: {
          userId: req.session.userId,
          category: category,
        },
        order: { createdAt: "DESC" },
        take: realLimitPlusOne,
      });
    } else {
      expenses = await Expense.find({
        where: {
          userId: req.session.userId,
          category: category,
        },
        order: { createdAt: "DESC" },
        skip: offset,
        take: realLimitPlusOne,
      });
    }

    expenses.length === realLimitPlusOne ? (isMore = true) : (isMore = false);

    return {
      expenses: expenses.slice(0, realLimit),
      isMore,
    };
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};
