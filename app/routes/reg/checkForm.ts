interface CheckFormInterface {
  email: string;
  pass: string;
  passAgain: string;
}

const checkForm = (formData: CheckFormInterface): boolean => {
  return false;
};

export { checkForm };
