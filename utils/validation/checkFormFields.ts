import { API_CONFIG } from "config";

const checkFormEmail = (email: string): boolean => {
  const EMAIL_REGEXP =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

  return EMAIL_REGEXP.test(email);
};

const checkFormPasswords = (password: string, passAgain: string): boolean => {
  if (password.length < API_CONFIG.MIN_PASS_LENGTH) {
    return false;
  }

  return password === passAgain;
};

const checkFormSinglePassword = (password: string): boolean => {
  if (password.length < API_CONFIG.MIN_PASS_LENGTH) {
    return false;
  }

  return true;
};
export { checkFormEmail, checkFormPasswords, checkFormSinglePassword };
