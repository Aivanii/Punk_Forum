import type { Route } from "../+types/home";
import { handleSubmitForm } from "../../../utils/validation/handleSubmitForm";
import type { FormPropsReg } from "../../../types/formProps";
import { useEffect, useState } from "react";
import { changeRegFormData } from "./changeRegFormData";
import {
  checkFormEmail,
  checkFormPasswords,
  checkFormUniqueNickname,
} from "../../../utils/validation/checkFormFields";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Register - Punk Forum" },
    { name: "description", content: "Page for registration!" },
  ];
}

export default function Reg() {
  const [FormPropsReg, setFormPropsReg] = useState<FormPropsReg>({
    nickname: "",
    unique_name: "",
    email: "",
    password: "",
    passAgain: "",
  });
  const [errorMsg, setErrorMsg] = useState<string>("");

  useEffect(() => {
    const clearFormPropsReg = () => {
      setFormPropsReg({
        nickname: "",
        unique_name: "",
        email: "",
        password: "",
        passAgain: "",
      });
    };
    clearFormPropsReg();
  }, []);

  return (
    <div className="bg-[#192024] w-dvw h-dvh">
      <div className="absolute top-1/2 left-1/2 -translate-1/2">
        <a href="/" className="cursor-pointer text-center w-3xs">
          <img
            src="./punkForumLogo.png"
            alt="логотип punk forum"
            className="w-3xs rounded-xl mb-4 m-auto"
          />
        </a>
        <form
          className=" flex justify-center items-center flex-col gap-4"
          onSubmit={(event) => {
            handleSubmitForm(event, FormPropsReg, "registration", setErrorMsg);
          }}
        >
          <h1 className="main-title">Регистрация</h1>
          {errorMsg && (
            <div className="text bg-[var(--error-color)] rounded-xl w-full text-center p-2">
              {errorMsg}
            </div>
          )}

          <div className="flex flex-col">
            <label htmlFor="unique_name">Имя аккаунта:</label>
            <input
              name="unique_name"
              type="text"
              required
              className={
                checkFormUniqueNickname(FormPropsReg.unique_name)
                  ? "standart-input"
                  : "standart-input-wrong-value"
              }
              value={FormPropsReg.unique_name}
              onChange={(event) => {
                setFormPropsReg(
                  changeRegFormData({
                    event: event,
                    FormPropsReg: FormPropsReg,
                  })
                );
              }}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="nickname">Отображаемое имя:</label>
            <input
              name="nickname"
              type="text"
              required
              className={
                checkFormUniqueNickname(FormPropsReg.nickname)
                  ? "standart-input"
                  : "standart-input-wrong-value"
              }
              value={FormPropsReg.nickname}
              onChange={(event) => {
                setFormPropsReg(
                  changeRegFormData({
                    event: event,
                    FormPropsReg: FormPropsReg,
                  })
                );
              }}
            />
          </div>

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
                  changeRegFormData({
                    event: event,
                    FormPropsReg: FormPropsReg,
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
                checkFormPasswords(
                  FormPropsReg.password,
                  FormPropsReg.passAgain
                )
                  ? "standart-input"
                  : "standart-input-wrong-value"
              }
              value={FormPropsReg.password}
              onChange={(event) => {
                setFormPropsReg(
                  changeRegFormData({
                    event: event,
                    FormPropsReg: FormPropsReg,
                  })
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
                checkFormPasswords(
                  FormPropsReg.password,
                  FormPropsReg.passAgain
                )
                  ? "standart-input"
                  : "standart-input-wrong-value"
              }
              value={FormPropsReg.passAgain}
              onChange={(event) => {
                setFormPropsReg(
                  changeRegFormData({
                    event: event,
                    FormPropsReg: FormPropsReg,
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
          Уже есть аккаунт? <a href="/login">Войти</a>
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
