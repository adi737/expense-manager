import { clearErrors, setErrors } from "../globals"

export const validationResult = ({ username, password }: { username: string; password: string }) => {
  if (username.length > 3 && username.length < 11 && password.length > 3 && password.length < 16) {
    clearErrors();
  } else {
    clearErrors();
    if (username.length < 4) {
      setErrors({ field: 'username', message: 'Username length must be at least 4 char' });
    }

    if (username.length > 10) {
      setErrors({ field: 'username', message: 'Username length must be 10 char or less' });
    }

    if (password.length < 4) {
      setErrors({ field: 'password', message: 'Password length must be at least 4 char' });
    }

    if (password.length > 15) {
      setErrors({ field: 'password', message: 'Password length must be 15 char or less' });
    }
  }
}