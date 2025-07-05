import type { FormPropsReg } from "../../../types/formProps";

interface getNewFormDataForChange {
  event: React.ChangeEvent<HTMLInputElement>;
  FormPropsReg: FormPropsReg;
}

const changeRegFormData = (data: getNewFormDataForChange): FormPropsReg => {
  const { target } = data.event;
  const { value, name } = target as { value: string; name: keyof FormPropsReg };

  let newFormProps: FormPropsReg = {
    email: data.FormPropsReg.email || "",
    password: data.FormPropsReg.password || "",
    passAgain: data.FormPropsReg.passAgain || "",
  };

  if (!target || !value || !name) {
    return newFormProps;
  }

  newFormProps[name] = value;

  return { ...newFormProps };
};

export { changeRegFormData };
