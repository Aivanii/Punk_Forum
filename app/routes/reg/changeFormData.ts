import type { FormProps } from "../../../types/formProps";

interface getNewFormDataForChange {
  event: React.ChangeEvent<HTMLInputElement>;
  FormProps: FormProps;
}

const changeFormData = (data: getNewFormDataForChange): FormProps => {
  const { target } = data.event;
  const { value, name } = target as { value: string; name: keyof FormProps };

  let newFormProps: FormProps = {
    email: data.FormProps.email || "",
    pass: data.FormProps.pass || "",
    passAgain: data.FormProps.passAgain || "",
  };

  if (!target || !value || !name) {
    return newFormProps;
  }

  newFormProps[name] = value;

  return { ...newFormProps };
};

export { changeFormData };
