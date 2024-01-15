class CardComponent extends HTMLElement {
  connectedCallback() {
    this.id = this.getAttribute("id");
    this.name = this.getAttribute("name");
    this.pictureId = this.getAttribute("pictureId");
    this.city = this.getAttribute("city") || null;
    this.rating = this.getAttribute("rating");
    this.description = this.innerText;
    this.render();
  }

  createRating() {
    let rating = this.rating;
    let list = "";

    for (let count = 5; count > 0; count--) {
      let classmame;

      if (rating >= 1) {
        classmame = "fa fa-star checked";
      } else if (rating >= 0.5) {
        classmame = "fa fa-star-half-full";
      } else {
        classmame = "fa fa-star";
      }

      rating--;
      list += `<li><span class="${classmame}"</span></li>`;
    }

    return list;
  }

  render() {
    this.innerHTML = `
    <div class="card">
      <img
        src="${this.pictureId}"
        alt="${this.name}"
      />

      <div class="card__content">
        <h3 class="card__title">${this.name}</h3>
        <p class="card__caption">
          ${this.description}
        </p>
        <ul class="rating">${this.createRating()}</ul>
        <button class="btn__primary">
          Order Now <span class="line"></span>
        </button>
      </div>
    </div>`;
  }
}

customElements.define("card-component", CardComponent);
