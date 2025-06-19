const checkFormEmail = (email: string): boolean => {
  const EMAIL_REGEXP =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

  return EMAIL_REGEXP.test(email);
};

const checkFormPasswords = (pass: string, passAgain: string): boolean => {
  const MIN_PASS_LENGTH: number = 8;
  if (pass.length < MIN_PASS_LENGTH) {
    return false;
  }

  return pass === passAgain;
};

export { checkFormEmail, checkFormPasswords };
