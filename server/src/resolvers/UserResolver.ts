/* eslint-disable no-useless-escape */
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
  Args,
  ArgsType,
} from "type-graphql";
import { v4 } from "uuid";
import { User } from "../entities/User";
import { clearErrors, errors, setErrors } from "../globals";
import { validationResult } from "../utils/validation";
import { getConnection } from "typeorm";
import { sendEmail } from "../utils/sendEmail";

@InputType()
export class InputValues {
  @Field()
  email!: string;

  @Field()
  password!: string;
}

@InputType()
export class InputPasswordValues {
  @Field()
  password!: string;

  @Field()
  repassword!: string;
}

@ObjectType()
export class Errors {
  @Field()
  field!: string;

  @Field()
  message!: string;
}

@ObjectType()
class UserResponse {
  @Field(() => [Errors], { nullable: true })
  errors?: Errors[];

  @Field(() => User, { nullable: true })
  user?: User;
}

@ArgsType()
class UrlQueries {
  @Field(() => String)
  id!: string;

  @Field(() => String)
  token!: string;
}

@Resolver()
export class UserResolver {
  @Query(() => User, { nullable: true })
  async user(@Ctx() { req }: MyContext): Promise<User | null> {
    try {
      const user = await User.findOne(req.session.userId);

      if (req.session.userId === user?.id) {
        return user;
      }

      return null;
    } catch (error) {
      return null;
    }
  }

  @Query(() => UserResponse)
  async activateAccount(
    @Ctx() { redis }: MyContext,
    @Args() { id, token }: UrlQueries
  ): Promise<UserResponse> {
    try {
      const user = await User.findOne(id);

      if (!user) {
        clearErrors();
        setErrors({ field: "user", message: "User does not exist" });
        return { errors };
      }

      if (user.isActive === true) {
        clearErrors();
        setErrors({ field: "user", message: "User is already active" });
        return { errors };
      }

      const isValid = await redis.get(process.env.ACTIVATE_USER + token);

      if (!isValid) {
        clearErrors();
        setErrors({ field: "user", message: "Link has expired" });
        return { errors };
      }

      await User.update(id, { isActive: true });

      await redis.del(process.env.ACTIVATE_USER + token);

      return { user };
    } catch (error) {
      if (
        (error.code =
          "22P02" &&
          error.message.includes("invalid input syntax for type uuid"))
      ) {
        clearErrors();
        setErrors({ field: "user", message: "Wrong URL" });
        return { errors };
      }
      console.error(error);
      throw new Error(error);
    }
  }

  @Mutation(() => UserResponse)
  async sendActivationLink(
    @Arg("id", () => String) id: string,
    @Ctx() { redis }: MyContext
  ): Promise<UserResponse> {
    try {
      const user = await User.findOne(id);

      if (!user) {
        clearErrors();
        setErrors({ field: "user", message: "User does not exist" });
        return { errors };
      }

      if (user.isActive === true) {
        clearErrors();
        setErrors({ field: "user", message: "User is already active" });
        return { errors };
      }

      const token = v4();

      const to = user.email;
      const subject = "Activate your account";
      const text = "Link to account activation";
      const link = `http://localhost:3000/activateAccount?id=${id}&token=${token}`;

      await redis.set(
        process.env.ACTIVATE_USER + token,
        id,
        "ex",
        60 * 60 * 24
      ); // 24h

      await sendEmail(to, subject, text, link);

      return { user };
    } catch (error) {
      if (
        (error.code =
          "22P02" &&
          error.message.includes("invalid input syntax for type uuid"))
      ) {
        clearErrors();
        setErrors({ field: "user", message: "Wrong URL" });
        return { errors };
      }
      console.error(error);
      throw new Error(error);
    }
  }

  @Mutation(() => UserResponse)
  async register(
    @Arg("options", () => InputValues) options: InputValues,
    @Ctx() { redis }: MyContext
  ): Promise<UserResponse> {
    validationResult(options);

    if (errors.length !== 0) {
      return { errors };
    }

    try {
      const hashedPassword = await hash(options.password);

      const user = await getConnection()
        .createQueryBuilder()
        .insert()
        .into(User)
        .values([
          {
            email: options.email,
            password: hashedPassword,
          },
        ])
        .returning("id, email")
        .execute();

      const id: string = user.raw[0].id;
      const token = v4();

      await redis.set(
        process.env.ACTIVATE_USER + token,
        id,
        "ex",
        60 * 60 * 24
      ); // 24h

      const to = user.raw[0].email;
      const subject = "Activate your account";
      const text = "Click here to activate your account";
      const link = `http://localhost:3000/activateAccount?id=${id}&token=${token}`;

      await sendEmail(to, subject, text, link);

      return { user: user.raw[0] };
    } catch (error) {
      if (error.code === "23505" && error.detail.includes("already exists")) {
        setErrors({ field: "email", message: "Email is already taken" });
        return { errors };
      }
      console.error(error.message);
      throw new Error(error);
    }
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg("options") options: InputValues,
    @Ctx() { req }: MyContext
  ): Promise<UserResponse> {
    validationResult(options);

    if (errors.length !== 0) {
      return { errors };
    }

    try {
      const user = await User.findOne({ where: { email: options.email } });

      if (!user) {
        setErrors({ field: "user", message: "Invalid credentials" });
        return { errors };
      }

      const valid = await verify(user.password, options.password);

      if (!valid) {
        setErrors({ field: "user", message: "Invalid credentials" });
        return { errors };
      }

      if (!user.isActive) {
        setErrors({
          field: "user",
          message: "User is inactive. Confirm your email.",
        });
        return { errors };
      }

      // login successful
      req.session.userId = user.id;
      return { user };
    } catch (error) {
      console.error(error.message);
      throw new Error(error);
    }
  }

  @Mutation(() => Boolean)
  logout(@Ctx() { req, res }: MyContext): Promise<boolean> {
    return new Promise((resolve) =>
      req.session.destroy((err) => {
        if (err) {
          console.error(err);
          resolve(false);
          throw new Error(err);
        }

        res.clearCookie("id");
        resolve(true);
      })
    );
  }

  @Mutation(() => UserResponse)
  async forgotPassword(
    @Arg("email", () => String) email: string,
    @Ctx() { redis }: MyContext
  ): Promise<UserResponse> {
    const validEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    clearErrors();

    if (!validEmail.test(email)) {
      setErrors({ field: "email", message: "Include valid email" });
    }

    if (errors.length !== 0) {
      return { errors };
    }

    try {
      const user = await User.findOne({ email });

      if (!user) {
        clearErrors();
        setErrors({ field: "email", message: "User does not exist" });
        return { errors };
      }

      const token = v4();

      await redis.set(
        process.env.RESET_PASSWORD + token,
        user.id,
        "ex",
        60 * 60
      ); // 1h

      const to = email;
      const subject = "Reset your password";
      const text = "Click here to reset your password";
      const link = `http://localhost:3000/resetPassword?id=${user.id}&token=${token}`;

      await sendEmail(to, subject, text, link);

      return { user };
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  }

  @Mutation(() => UserResponse)
  async resetPassword(
    @Arg("options", () => InputPasswordValues) options: InputPasswordValues,
    @Args() { id, token }: UrlQueries,
    @Ctx() { redis }: MyContext
  ): Promise<UserResponse> {
    const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/;

    clearErrors();

    if (!validPassword.test(options.password)) {
      setErrors({
        field: "password",
        message:
          "Include at least 6 characters, one lowercase, one uppercase, one digit and one special character.",
      });
    }

    if (!validPassword.test(options.repassword)) {
      setErrors({
        field: "repassword",
        message:
          "Include at least 6 characters, one lowercase, one uppercase, one digit and one special character.",
      });
    }

    if (errors.length !== 0) {
      return { errors };
    }

    if (options.password !== options.repassword) {
      setErrors({
        field: "repassword",
        message: "Input the same password twice",
      });

      return { errors };
    }

    try {
      const user = await User.findOne(id);

      if (!user) {
        clearErrors();
        setErrors({ field: "user", message: "User does not exist" });
        return { errors };
      }

      const isValid = await redis.get(process.env.RESET_PASSWORD + token);

      if (!isValid) {
        clearErrors();
        setErrors({ field: "user", message: "Link has expired" });
        return { errors };
      }

      await redis.del(process.env.RESET_PASSWORD + token);

      const hashedPassword = await hash(options.password);

      await User.update(id, { password: hashedPassword });

      return { user };
    } catch (error) {
      if (
        (error.code =
          "22P02" &&
          error.message.includes("invalid input syntax for type uuid"))
      ) {
        clearErrors();
        setErrors({ field: "user", message: "Wrong URL" });
        return { errors };
      }
      console.error(error);
      throw new Error(error);
    }
  }
}
