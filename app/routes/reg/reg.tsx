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
    <div>
      <form onSubmit={handleSubmit} className="bg-amber-200">
        <label htmlFor="email">Почта:</label>
        <input name="email" type="email" required />

        <label htmlFor="pass">Пароль:</label>
        <input name="pass" type="text" required />
        <label htmlFor="pass-again">Пароль (ещё раз)</label>
        <input name="pass-again" type="password" required />

        <button type="submit">Продолжить</button>
      </form>
    </div>
  );
}
