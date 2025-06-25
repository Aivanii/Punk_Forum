import type { Route } from "../+types/home";
import {
  checkFormEmail,
  checkFormSinglePassword,
} from "utils/validation/checkFormFields";
import type { FormPropsLogin } from "types/formProps";
import { changeLoginFormData } from "./changeLoginFormData";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login - Punk Forum" },
    { name: "description", content: "Page for login!" },
  ];
}

export default function Login() {
  const [FormPropsLogin, setFormPropsLogin] = useState<FormPropsLogin>({
    email: "",
    pass: "",
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
              checkFormEmail(FormPropsLogin.email)
                ? "standart-input"
                : "standart-input-wrong-value"
            }
            value={FormPropsLogin.email}
            onChange={(event) => {
              setFormPropsLogin(
                changeLoginFormData({
                  event: event,
                  FormPropsLogin: FormPropsLogin,
                })
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
              checkFormSinglePassword(FormPropsLogin.pass)
                ? "standart-input"
                : "standart-input-wrong-value"
            }
            value={FormPropsLogin.pass}
            onChange={(event) => {
              setFormPropsLogin(
                changeLoginFormData({
                  event: event,
                  FormPropsLogin: FormPropsLogin,
                })
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
