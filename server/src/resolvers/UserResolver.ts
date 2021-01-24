import { hash, verify } from "argon2";
import { MyContext } from "../MyContext";
import {
  Resolver,
  Query,
  Mutation,
  Arg,
  Field,
  InputType,
  ObjectType,
  Ctx,
} from "type-graphql";
import { User } from "../entities/User";
import { errors, setErrors } from "../globals";
import { validationResult } from "../utils/validation";



@InputType()
export class InputValues {
  @Field()
  username: string;

  @Field()
  password: string;
}

@ObjectType()
export class Errors {
  @Field()
  field: string;

  @Field()
  message: string;
}

@ObjectType()
class UserResponse {
  @Field(() => [Errors], { nullable: true })
  errors?: Errors[];

  @Field(() => String, { nullable: true })
  serverError?: string;

  @Field(() => Boolean, { nullable: true })
  ok?: boolean;
}

@Resolver()
export class UserResolver {
  @Query(() => User, { nullable: true })
  async user(
    @Ctx() { req }: MyContext
  ) {
    const user = await User.findOne(req.session.userId);

    if (req.session.userId === user?.id) {
      return user;
    }

    return null
  }

  @Mutation(() => UserResponse)
  async register(
    @Arg("options", () => InputValues) options: InputValues,
  ): Promise<UserResponse> {
    validationResult(options);

    if (errors.length !== 0) {
      return { errors }
    }

    try {
      const hashedPassword = await hash(options.password);

      await User.insert({
        username: options.username,
        password: hashedPassword
      });

      return { ok: true };
    } catch (error) {
      if (error.code === '23505' && error.detail.includes('already exists')) {
        setErrors({ field: 'duplicate', message: 'Username is already taken' });
        return { errors }
      }
      console.error(error.message);
      return { serverError: 'server error' }
    }
  }



  @Mutation(() => UserResponse)
  async login(
    @Arg("options") options: InputValues,
    @Ctx() { req }: MyContext
  ): Promise<UserResponse> {
    validationResult(options);

    if (errors.length !== 0) {
      return { errors }
    }

    try {
      const user = await User.findOne({ where: { username: options.username } });

      if (!user) {
        setErrors({ field: 'credentials', message: 'Invalid credentials' });
        return { errors }
      }

      const valid = await verify(user.password, options.password);

      if (!valid) {
        setErrors({ field: 'credentials', message: 'Invalid credentials' });
        return { errors }
      }

      // login successful
      req.session.userId = user.id;
      return { ok: true }
    } catch (error) {
      console.error(error.message)
      return { serverError: 'server error' }
    }
  }

}