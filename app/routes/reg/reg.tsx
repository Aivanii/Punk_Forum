import type { Route } from "../+types/home";
import { handleSubmit } from "./handleSubmit";
import type { FormProps } from "./formProps";
import { useState } from "react";
import { changeFormData } from "./changeFormData";

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

  return (
    <div className="bg-[#192024] w-dvw h-dvh">
      <form
        onSubmit={handleSubmit}
        className="absolute top-1/2 left-1/2 -translate-1/2 flex justify-center items-center flex-col gap-4"
      >
        <h1 className="main-title">Регистрация</h1>
        <div className="flex flex-col">
          <label htmlFor="email">Почта:</label>
          <input
            name="email"
            type="email"
            required
            className="standart-input"
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
            className="standart-input"
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
            className="standart-input"
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
