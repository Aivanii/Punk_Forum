import { API_CONFIG } from "config";

const checkFormEmail = (email: string): boolean => {
  const EMAIL_REGEXP =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

  return EMAIL_REGEXP.test(email);
};

const checkFormPasswords = (pass: string, passAgain: string): boolean => {
  if (pass.length < API_CONFIG.MIN_PASS_LENGTH) {
    return false;
  }

  return pass === passAgain;
};

const checkFormSinglePassword = (pass: string): boolean => {
  if (pass.length < API_CONFIG.MIN_PASS_LENGTH) {
    return false;
  }

  return true;
};
export { checkFormEmail, checkFormPasswords, checkFormSinglePassword };
