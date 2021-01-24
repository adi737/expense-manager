export const __prod__ = process.env.NODE_ENV === "production";
export const errors: { field: string; message: string }[] = [];
export const setErrors = (err: { field: string; message: string; }) => errors.push(err);
export const clearErrors = () => errors.length = 0;