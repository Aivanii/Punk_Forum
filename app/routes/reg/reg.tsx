import type { Route } from "../+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Register - Punk Forum" },
    { name: "description", content: "Page for registration!" },
  ];
}

export default function Reg() {
  return (
    <div>
      <form>
        <label htmlFor="email">Почта:</label>
        <input name="email" type="email" required />

        <label htmlFor="pass">Пароль:</label>
        <input name="pass" type="text" required />
        <label htmlFor="pass-again">email</label>
        <input name="pass-again" type="password" required />

        <button type="submit">Продолжить</button>
      </form>
    </div>
  );
}
