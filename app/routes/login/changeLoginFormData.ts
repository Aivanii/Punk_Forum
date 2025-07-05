import type { FormPropsLogin } from "../../../types/formProps";

interface getNewFormDataForChange {
  event: React.ChangeEvent<HTMLInputElement>;
  FormPropsLogin: FormPropsLogin;
}

const changeLoginFormData = (data: getNewFormDataForChange): FormPropsLogin => {
  const { target } = data.event;
  const { value, name } = target as {
    value: string;
    name: keyof FormPropsLogin;
  };

  let newFormProps: FormPropsLogin = {
    email: data.FormPropsLogin.email || "",
    password: data.FormPropsLogin.password || "",
  };

  if (!target || !value || !name) {
    return newFormProps;
  }

  newFormProps[name] = value;

  return { ...newFormProps };
};

export { changeLoginFormData };
