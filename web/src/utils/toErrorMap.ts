import { Errors } from "../generated/graphql";

export const toErrorMap = (errors: Errors[]) => {
  const errorMap: Record<string, string> = {};
  errors.forEach(({ field, message }) => {
    errorMap[field] = message;
  });

  return errorMap;
};