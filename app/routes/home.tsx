import type { Route } from "./+types/home";
import Header from "~/widgets/header/header";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Main page - Punk Forum" },
    { name: "description", content: "Welcome to Russian Punk Forum!" },
  ];
}

export default function Home() {
  return (
    <>
      <Header />
    </>
  );
}
