import type { Route } from "../+types/home";
import Header from "~/widgets/header/header";
import TopBar from "~/widgets/topBar/topBar";
import Nav from "~/routes/home/nav/nav";
import Forums from "./forums/forums";
import { useEffect, useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Main page - Punk Forum" },
    { name: "description", content: "Welcome to Russian Punk Forum!" },
  ];
}

export default function Home() {
  const [chosenTopic, setChosenTopic] = useState<string>("");
  const [isPageLoading, setIsPageLoading] = useState<boolean>(true);

  useEffect(() => {
    let params = new URLSearchParams(document.location.search);
    let topic = params.get("topic");
    if (topic) setChosenTopic(topic);

    setIsPageLoading(false);
  }, []);
  return (
    <>
      <TopBar />
      <Header />
      <div className="bg-[url(./nav-bg.png)]">
        <Nav isPageLoading={isPageLoading} chosenTopic={chosenTopic} />
        {chosenTopic && <Forums chosenTopic={chosenTopic} />}
      </div>
    </>
  );
}
