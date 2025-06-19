import type { Route } from "../+types/home";
import { handleSubmit } from "./handleSubmit";
import type { FormProps } from "./formProps";
import { useState } from "react";
import { changeFormData } from "./changeFormData";
import { checkFormEmail, checkFormPasswords } from "./checkFormFields";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Register - Punk Forum" },
    { name: "description", content: "Page for registration!" },
  ];
}

export default function Reg() {
  const [formProps, setFormProps] = useState<FormProps>({
    email: "",
    pass: "",
    passAgain: "",
  });

  interface statusMsg {
    status: "success" | "fail" | null;
    msg: string;
  }

  const [statusMsg, setStatusMsg] = useState<statusMsg>({
    status: null,
    msg: "",
  });

  return (
    <div className="bg-[#192024] w-dvw h-dvh">
      <form
        onSubmit={handleSubmit}
        className="absolute top-1/2 left-1/2 -translate-1/2 flex justify-center items-center flex-col gap-4"
      >
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
        <h1 className="main-title">Регистрация</h1>
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

        <div className="flex flex-col">
          <label htmlFor="passAgain">Пароль (ещё раз)</label>
          <input
            name="passAgain"
            type="password"
            required
            className={
              checkFormPasswords(formProps.pass, formProps.passAgain)
                ? "standart-input"
                : "standart-input-wrong-value"
            }
            value={formProps.passAgain}
            onChange={(event) => {
              setFormProps(
                changeFormData({ event: event, FormProps: formProps })
              );
            }}
          />
        </div>

        <button type="submit" className="standart-btn">
          Продолжить
        </button>
      </form>
    </div>
  );
}
