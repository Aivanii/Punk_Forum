import { createPortal } from "react-dom";
import { ThemeSections } from "./themeSections";
import PhoneMenuBtn from "./phoneMenuBtn";

import "./navStyles.css";

const Nav = ({
  isPageLoading,
  chosenTopic,
}: {
  isPageLoading: boolean;
  chosenTopic: string;
}) => {
  return (
    <>
      {!isPageLoading && createPortal(<PhoneMenuBtn />, document.body)}
      <nav
        className="py-4
        fixed -top-full left-0 
        duration-700
        bg-[var(--main-bg-color)] sm:bg-transparent
        sm:relative sm:top-0 sm:left-0"
        id="nav"
      >
        <div className="section-container">
          <ul
            className="grid gap-4 text-2xl place-items-center
            grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          >
            {ThemeSections.map((elem) => (
              <li key={elem.id}>
                <div>
                  <a
                    href={`/?topic=${elem.url}`}
                    className={`h-20 flex items-center justify-center cursor-pointer border-0
                    w-72 md:w-96 lg:w-64 
                ${
                  chosenTopic === elem.url ? "bg-green-950" : "bg-[#0a1d11c2]"
                }`}
                  >
                    {elem.title}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
