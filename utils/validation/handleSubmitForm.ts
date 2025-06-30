import { API_CONFIG } from "config";

const handleSubmitForm = async (
  event: React.FormEvent<HTMLFormElement>,
  FormPropsReg: any,
  route: string
) => {
  event.preventDefault();

  const response = await fetch(`${API_CONFIG.BACKEND_URL}${route}`, {
    method: "POST",
    credentials: "include",
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
