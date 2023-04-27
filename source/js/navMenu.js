const btnOpen = document.querySelector(".js-menu--open");
const btnClose = document.querySelector(".js-menu--close");
const nav = document.querySelector(".nav");
const layout = document.querySelector(".layout");

// window.addEventListener("load", () => {
//   nav.classList.add("hidden");
// });

btnOpen.onclick = () => {
  nav.classList.remove("mobileHide");
  layout.classList.remove("hidden");

  layout.onclick = () => {
    nav.classList.add("mobileHide");
    layout.classList.add("hidden");
  };
  // document.onclick = (e) => {
  //   if (
  //     !nav.classList.contains("hidden") &&
  //     e.target !== btnOpen &&
  //     !e.composedPath().includes(nav)
  //   ) {
  //     nav.classList.add("hidden");
  //     layout.classList.add("hidden");
  //   }
  // };
};

btnClose.onclick = () => {
  nav.classList.add("mobileHide");
  layout.classList.add("hidden");
};
