import type { FormPropsReg } from "../../../types/formProps";
import { API_CONFIG } from "config";

const handleSubmitRegForm = async (
  event: React.FormEvent<HTMLFormElement>,
  FormPropsReg: FormPropsReg
) => {
  event.preventDefault();

  const response = await fetch(`${API_CONFIG.BACKEND_URL}/registration`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(FormPropsReg),
  });
  const data = await response.json();

  alert(data);
  console.log(data);
};

export { handleSubmitRegForm };
