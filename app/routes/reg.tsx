import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Register - Punk Forum" },
    { name: "description", content: "Page for registration!" },
  ];
}

export default function Reg() {
  return <>reg</>;
}
