import type { Route } from "../+types/home";
import { checkForm } from "./checkForm";
import { handleSubmit } from "./handleSubmit";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Register - Punk Forum" },
    { name: "description", content: "Page for registration!" },
  ];
}

export default function Reg() {
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
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="pass">Пароль:</label>
          <input name="pass" type="password" required className="standart-input" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="pass-again">Пароль (ещё раз)</label>
          <input
            name="pass-again"
            type="password"
            required
            className="standart-input"
          />
        </div>

        <button type="submit" className="standart-btn">
          Продолжить
        </button>
      </form>
    </div>
  );
}
