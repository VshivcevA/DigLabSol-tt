if (window.innerWidth >= 1200) {
  const header = document.querySelector(".nav");
  let lastScroll = 0;
  const defaultOffset = 400;

  const scrollPosition = () =>
    window.pageYOffset || document.documentElement.scrollTop;
  const containHide = () => header.classList.contains("scroll-hide");

  window.addEventListener("scroll", () => {
    if (
      scrollPosition() > lastScroll &&
      !containHide() &&
      scrollPosition() > defaultOffset
    ) {
      header.classList.add("scroll-hide");
    }
    if (scrollPosition() < lastScroll && containHide()) {
      header.classList.remove("scroll-hide");
    }
    lastScroll = scrollPosition();
  });
}
