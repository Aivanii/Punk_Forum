import type { Route } from "../+types/home";
import {
  checkFormEmail,
  checkFormSinglePassword,
} from "utils/validation/checkFormFields";
import type { FormProps } from "types/formProps";
import { changeLoginFormData } from "./changeLoginFormData";
import { useState } from "react";
import { handleSubmitForm } from "utils/validation/handleSubmitForm";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login - Punk Forum" },
    { name: "description", content: "Page for login!" },
  ];
}

export default function Login() {
  const [FormProps, setFormPropsLogin] = useState<FormProps>({
    email: "",
    password: "",
  });
  return (
    <div className="bg-[#192024] w-dvw h-dvh">
      <div className="absolute top-1/2 left-1/2 -translate-1/2">
        <form
          className=" flex justify-center items-center flex-col gap-4"
          onSubmit={(event) => {
            handleSubmitForm(event, FormProps, "login");
          }}
        >
          <h1 className="main-title">Вход</h1>
          <div className="flex flex-col">
            <label htmlFor="email">Почта:</label>
            <input
              name="email"
              type="email"
              required
              className={
                checkFormEmail(FormProps.email)
                  ? "standart-input"
                  : "standart-input-wrong-value"
              }
              value={FormProps.email}
              onChange={(event) => {
                setFormPropsLogin(
                  changeLoginFormData({
                    event: event,
                    FormPropsLogin: FormProps,
                  })
                );
              }}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password">Пароль:</label>
            <input
              name="password"
              type="password"
              required
              className={
                checkFormSinglePassword(FormProps.password)
                  ? "standart-input"
                  : "standart-input-wrong-value"
              }
              value={FormProps.password}
              onChange={(event) => {
                setFormPropsLogin(
                  changeLoginFormData({
                    event: event,
                    FormPropsLogin: FormProps,
                  })
                );
              }}
            />
          </div>
          <button type="submit" className="standart-btn">
            Продолжить
          </button>
        </form>
        <div className="text-center">
          Нет аккаунта? <a href="/reg">Зарегестрироваться</a>
        </div>
        <div className="text-center flex justify-center items-center gap-4 my-2">
          <span className="relative w-2/5 border-b-1 border-[var(--light-primary-color)] flex"></span>
          <span>или</span>
          <span className="relative w-2/5 border-b-1 border-[var(--light-primary-color)] flex"></span>
        </div>

        <div className="flex justify-center items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Google_Favicon_2025.svg/250px-Google_Favicon_2025.svg.png"
            alt="Вход с помощью google аккаунта"
            className="w-14 text-center border-2 border-[var(--light-primary-color)]
            p-1 rounded-xl cursor-pointer"
          />
        </div>

        <div className="flex flex-col text-center gap-2 mt-8">
          <a href="/user_agreement">Пользовательское соглашение</a>
          <a href="/privacy_policy">Политика конфиденциальности</a>
        </div>
      </div>
    </div>
  );
}
