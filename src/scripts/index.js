import "regenerator-runtime"; /* for async await transpile */
import "../styles/styles.scss";

window.addEventListener("DOMContentLoaded", () => {
  const navigation = document.querySelector(".navigation");

  window.addEventListener("scroll", () => {
    console.log(document.body.scrollTop);
    if (
      document.body.scrollTop >= navigation.offsetHeight ||
      document.documentElement.scrollTop >= navigation.offsetHeight
    ) {
      navigation.classList.add("navigation-onScroll");
    } else {
      navigation.classList.remove("navigation-onScroll");
    }
  });
});
