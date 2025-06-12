export const OpenCloseLogic = () => {
  const menuElem = document.querySelector("#nav");
  if (!menuElem) return;

  if (menuElem.classList.contains("nav-active")) {
    menuElem.classList.remove("nav-active");
  } else {
    menuElem.classList.add("nav-active");
  }
};
 