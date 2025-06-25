import type { FormProps } from "../../../types/formProps";
import { API_CONFIG } from "~/config";

const handleSubmitRegForm = async (
  event: React.FormEvent<HTMLFormElement>,
  formProps: FormProps
) => {
  event.preventDefault();

  const response = await fetch(`${API_CONFIG.backEndUrl}/registration`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(formProps),
  });
  const data = await response.json();

  alert(data);
  console.log(data);
};

export { handleSubmitRegForm };
