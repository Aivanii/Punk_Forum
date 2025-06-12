import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Main page - Punk Forum" },
    { name: "description", content: "Welcome to Russian Punk Forum!" },
  ];
}

export default function Home() {
  return <>home</>;
}
