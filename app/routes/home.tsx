import type { Route } from "./+types/home";
import TopBar from "~/widgets/topBar/topBar";
import Header from "~/widgets/header/header";
import Nav from "~/widgets/nav/nav";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Main page - Punk Forum" },
    { name: "description", content: "Welcome to Russian Punk Forum!" },
  ];
}

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <div className="bg-[url(./nav-bg.png)]">
        <Nav />
      </div>
    </>
  );
}
