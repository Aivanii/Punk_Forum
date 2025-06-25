import type { Route } from "./+types/home";
import TopBar from "~/widgets/topBar/topBar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Пользовательское соглашение - Punk Forum" },
    {
      name: "description",
      content:
        "Здесь вы можете ознакомиться с текущим положением пользовательского соглашения ресурса Punk Forum.!",
    },
  ];
}

const UserAgreement = () => {
  return (
    <>
      <TopBar />
      <div className="w-full max-w-[1280px] m-auto flex flex-col gap-8 pt-12 pb-20"></div>
    </>
  );
};

export default UserAgreement;
