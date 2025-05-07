// Checks if password meets the requirements: Minimum 8 characters, special character and uppercase character
export const isPasswordValid = (password: string) => {
  const hasMinLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  return hasMinLength && hasUppercase && hasSpecialChar;
};

// Checks if both password are equal
export const doPasswordsMatch = (password1: string, comparePassword: string) => {
  return password1 === comparePassword;
};
