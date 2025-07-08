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

    console.log(response);
    const data = await response.json();
    console.log(data);

    if (!response.ok || data.success === false) {
      throw new Error(
        data.message ? `Ошибка входа: ${data.message}` : "Ошибка соединения"
      );
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
