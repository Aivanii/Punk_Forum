import type { Route } from "../+types/home";
import { useEffect, useState } from "react";

import Header from "~/widgets/header/header";
import TopBar from "~/widgets/topBar/topBar";
import Nav from "~/routes/home/nav/nav";
import Forums from "./forums/forums";
import LoadingElem from "~/widgets/loading/loadingElem";

import { useAuth } from "~/customHooks/useAuth";

import { API_CONFIG } from "config";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Main page - Punk Forum" },
    { name: "description", content: "Welcome to Russian Punk Forum!" },
  ];
}

export default function Home() {
  const { user, isAuthentificated, isLoading } = useAuth();

  const [chosenTopic, setChosenTopic] = useState<string>("");
  const [isPageLoading, setIsPageLoading] = useState<boolean>(true);

  useEffect(() => {
    let params = new URLSearchParams(document.location.search);
    let topic = params.get("topic");
    setTimeout(() => {
      if (topic) setChosenTopic(topic);
      setIsPageLoading(false);
    }, API_CONFIG.WAIT_FOR_LOADING_MS);
  }, []);

  if (isPageLoading) {
    return (
      <>
        <TopBar />
        <Header />
        <div className="bg-[url(./nav-bg.png)]">
          <Nav isPageLoading={isPageLoading} chosenTopic={chosenTopic} />
        </div>
        <LoadingElem />
      </>
    );
  }

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
