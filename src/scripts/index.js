import "regenerator-runtime"; /* for async await transpile */
import "../styles/styles.scss";
import "./card-component";
import { restaurants } from "../public/data/DATA.json";

window.addEventListener("DOMContentLoaded", () => {
  const navigation = document.querySelector(".navigation");

  window.addEventListener("scroll", () => {
    if (
      document.body.scrollTop >= navigation.offsetHeight ||
      document.documentElement.scrollTop >= navigation.offsetHeight
    ) {
      navigation.classList.add("navigation-onScroll");
    } else {
      navigation.classList.remove("navigation-onScroll");
    }
  });

  makeRestaurantSection();
});

const makeRestaurantSection = () => {
  const restaurantSection = document.getElementById(
    "restaurantSection__content"
  );

  for (var key in restaurants) {
    const restaurant = restaurants[key];
    const card = `<card-component id="${restaurant.id}" name="${restaurant.name}" pictureId="${restaurant.pictureId}" city="${restaurant.city}" rating="${restaurant.rating}">${restaurant.description}</card-component>`;

    restaurantSection.innerHTML += card;
  }
};
