import { API_CONFIG } from "config";

export const checkFormNickname = (nickname: string): boolean => {
  if (nickname.length < API_CONFIG.MIN_NICKNAME_LENGTH) {
    return false;
  }

  return true;
};

export const checkFormUniqueNickname = (unique_name: string): boolean => {
  if (unique_name.length < API_CONFIG.MIN_UNIQUENAME_LENGTH) {
    return false;
  }

  return true;
};

export const checkFormEmail = (email: string): boolean => {
  const EMAIL_REGEXP =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

  return EMAIL_REGEXP.test(email);
};

export const checkFormPasswords = (
  password: string,
  passAgain: string
): boolean => {
  if (password.length < API_CONFIG.MIN_PASS_LENGTH) {
    return false;
  }

  return password === passAgain;
};

export const checkFormSinglePassword = (password: string): boolean => {
  if (password.length < API_CONFIG.MIN_PASS_LENGTH) {
    return false;
  }

  return true;
};
