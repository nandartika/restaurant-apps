import "regenerator-runtime"; /* for async await transpile */
import "../styles/styles.scss";
import "./card-component";
import { restaurants } from "../public/data/DATA.json";
import { menus } from "../public/data/MENU_DATA.json";

const navigation = document.querySelector(".navigation");

window.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("scroll", navigationHandler);
  document
    .getElementById("menuBtn")
    .addEventListener("click", menuButtonHandler);

  makeRestaurantSection();
  makeMenuSection();
});

const menuButtonHandler = () => {
  const mobileNavigation = document.getElementById("navigation__list-mobile");

  if (mobileNavigation.classList.contains("navigation__list-mobile--hide")) {
    mobileNavigation.classList.remove("navigation__list-mobile--hide");
  } else {
    mobileNavigation.classList.add("navigation__list-mobile--hide");
  }
};

const navigationHandler = () => {
  if (
    document.body.scrollTop >= navigation.offsetHeight ||
    document.documentElement.scrollTop >= navigation.offsetHeight
  ) {
    navigation.classList.add("navigation-onScroll");
  } else {
    navigation.classList.remove("navigation-onScroll");
  }
};

const makeRestaurantSection = () => {
  const restaurantSection = document.getElementById(
    "restaurantSection__content"
  );

  for (let key in restaurants) {
    const restaurant = restaurants[key];
    const card = `<card-component id="${restaurant.id}" name="${restaurant.name}" pictureId="${restaurant.pictureId}" city="${restaurant.city}" rating="${restaurant.rating}" description="${restaurant.description}"></card-component>`;

    restaurantSection.innerHTML += card;
  }
};

const makeMenuSection = () => {
  const restaurantSection = document.getElementById(
    "specialMenuSection__content"
  );

  for (let key in menus) {
    const menu = menus[key];
    const card = `<card-component id="${menu.id}" name="${menu.name}" pictureId="${menu.pictureId}" rating="${menu.rating}" description="${menu.description}"></card-component>`;

    restaurantSection.innerHTML += card;
  }
};
