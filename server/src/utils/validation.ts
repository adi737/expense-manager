/* eslint-disable no-useless-escape */
import { clearErrors, setErrors } from "../globals";

export const validationResult = ({
  email,
  password,
}: {
  email: string;
  password: string;
}): void => {
  const validEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/;

  clearErrors();

  if (!validEmail.test(email)) {
    setErrors({ field: "email", message: "Include valid email" });
  }

  if (!validPassword.test(password)) {
    setErrors({
      field: "password",
      message:
        "Include at least 6 characters, one lowercase, one uppercase, one digit and one special character.",
    });
  }
};
