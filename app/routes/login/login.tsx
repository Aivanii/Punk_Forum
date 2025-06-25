import type { Route } from "../+types/home";
import { checkFormEmail } from "utils/validation/checkFormFields";
import type { FormProps } from "types/formProps";
import { changeFormData } from "../reg/changeRegFormData";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login - Punk Forum" },
    { name: "description", content: "Page for login!" },
  ];
}

export default function Login() {
  const [formProps, setFormProps] = useState<FormProps>({
    email: "",
    pass: "",
    passAgain: "",
  });
  return (
    <div className="bg-[#192024] w-dvw h-dvh">
      <form className="absolute top-1/2 left-1/2 -translate-1/2 flex justify-center items-center flex-col gap-4">
        <h1 className="main-title">Вход</h1>
        <div className="flex flex-col">
          <label htmlFor="email">Почта:</label>
          <input
            name="email"
            type="email"
            required
            className={
              checkFormEmail(formProps.email)
                ? "standart-input"
                : "standart-input-wrong-value"
            }
            value={formProps.email}
            onChange={(event) => {
              setFormProps(
                changeFormData({ event: event, FormProps: formProps })
              );
            }}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="pass">Пароль:</label>
          <input
            name="pass"
            type="password"
            required
            className={
              checkFormPasswords(formProps.pass, formProps.passAgain)
                ? "standart-input"
                : "standart-input-wrong-value"
            }
            value={formProps.pass}
            onChange={(event) => {
              setFormProps(
                changeFormData({ event: event, FormProps: formProps })
              );
            }}
          />
        </div>
        {(statusMsg.status || statusMsg.msg) && (
          <div className="flex gap-4 bg-[var(--secondary-color)] w-full p-4 rounded-xl">
            {statusMsg.status === "success" && (
              <img
                alt="Success"
                width="48"
                height="48"
                src="https://www.reshot.com/preview-assets/icons/AEJ9U3XCGB/success-AEJ9U3XCGB.svg"
              />
            )}
            {statusMsg.status === "fail" && (
              <img
                alt="Error"
                width="48"
                height="48"
                src="https://www.reshot.com/preview-assets/icons/CLWP24AVMS/error-CLWP24AVMS.svg"
              />
            )}

            {statusMsg.msg && <div> statusMsg.msg</div>}
          </div>
        )}
        <button type="submit" className="standart-btn">
          Продолжить
        </button>
      </form>
    </div>
  );
}
