import type { Route } from "../+types/home";
import { handleSubmitRegForm } from "./handleSubmitRegForm";
import type { FormPropsReg } from "../../../types/formProps";
import { useState } from "react";
import { changeRegFormData } from "./changeRegFormData";
import {
  checkFormEmail,
  checkFormPasswords,
} from "../../../utils/validation/checkFormFields";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Register - Punk Forum" },
    { name: "description", content: "Page for registration!" },
  ];
}

export default function Reg() {
  const [FormPropsReg, setFormPropsReg] = useState<FormPropsReg>({
    email: "",
    pass: "",
    passAgain: "",
  });

  return (
    <div className="bg-[#192024] w-dvw h-dvh">
      <form
        onSubmit={(event) => {
          handleSubmitRegForm(event, FormPropsReg);
        }}
        className="absolute top-1/2 left-1/2 -translate-1/2 flex justify-center items-center flex-col gap-4"
      >
        <h1 className="main-title">Регистрация</h1>
        <div className="flex flex-col">
          <label htmlFor="email">Почта:</label>
          <input
            name="email"
            type="email"
            required
            className={
              checkFormEmail(FormPropsReg.email)
                ? "standart-input"
                : "standart-input-wrong-value"
            }
            value={FormPropsReg.email}
            onChange={(event) => {
              setFormPropsReg(
                changeRegFormData({ event: event, FormPropsReg: FormPropsReg })
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
              checkFormPasswords(FormPropsReg.pass, FormPropsReg.passAgain)
                ? "standart-input"
                : "standart-input-wrong-value"
            }
            value={FormPropsReg.pass}
            onChange={(event) => {
              setFormPropsReg(
                changeRegFormData({ event: event, FormPropsReg: FormPropsReg })
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
              checkFormPasswords(FormPropsReg.pass, FormPropsReg.passAgain)
                ? "standart-input"
                : "standart-input-wrong-value"
            }
            value={FormPropsReg.passAgain}
            onChange={(event) => {
              setFormPropsReg(
                changeRegFormData({ event: event, FormPropsReg: FormPropsReg })
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
