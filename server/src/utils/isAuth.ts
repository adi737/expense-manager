import { MiddlewareFn } from "type-graphql";
import { MyContext } from "../MyContext";

export const isAuth: MiddlewareFn<MyContext> = async ({ context }, next) => {
  const { req } = context;

  if (!req.session.userId) {
    return { auth: "not authenticated" };
  }

  return next();
};
