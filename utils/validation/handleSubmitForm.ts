import { API_CONFIG } from "config";

const handleSubmitForm = async (
  event: React.FormEvent<HTMLFormElement>,
  FormPropsReg: any
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
  console.log(data, ...FormPropsReg);
};

export { handleSubmitForm };
