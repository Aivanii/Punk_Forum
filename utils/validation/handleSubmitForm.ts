import { API_CONFIG } from "config";
import type { FormProps } from "types/formProps";

const handleSubmitForm = async (
  event: React.FormEvent<HTMLFormElement>,
  FormProps: FormProps,
  route: string
) => {
  event.preventDefault();

  console.log(FormProps);

  const response = await fetch(`${API_CONFIG.BACKEND_URL}${route}`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(FormProps),
  });
  const data = await response.json();

  console.log(data);
};

export { handleSubmitForm };
