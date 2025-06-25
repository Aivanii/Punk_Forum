import type { Route } from "../+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login - Punk Forum" },
    { name: "description", content: "Page for login!" },
  ];
}

export default function Login() {

  return (
    <div className="bg-[#192024] w-dvw h-dvh">
    </div>
  );
}
