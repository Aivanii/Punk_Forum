import { API_CONFIG } from "config";
import type { FormProps } from "types/formProps";

const handleSubmitForm = async (
  event: React.FormEvent<HTMLFormElement>,
  FormProps: FormProps,
  route: string,
  setErrorMsg?: React.Dispatch<React.SetStateAction<string>>
) => {
  event.preventDefault();

  try {
    const response = await fetch(`${API_CONFIG.BACKEND_URL}${route}`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(FormProps),
    });

    console.log(response)
    if (!response.ok) {
      throw new Error(`Ошибка соединения! Статус: ${response.status}`);
    }

    const data = await response.json();
    console.log(data)
    if (data.success === false) {
      throw new Error(data.message || "Неизвестная ошибка");
    }
  } catch (err: unknown) {
    let errorMsg = "Неизвестная ошибка";

    if (err instanceof Error) {
      errorMsg = err.message;
    } else if (typeof err === "string") {
      errorMsg = err;
    }

    if (setErrorMsg) {
      setErrorMsg(errorMsg);
    }

    console.error("API request was failed:", err);
  }
};

export { handleSubmitForm };
