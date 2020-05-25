export default class Card {
  constructor(name, link, openZoom) {
    this.name = name;
    this.link = link;
    this.cardElement = this.create();
    this.like = this.like.bind(this);
    this.remove = this.remove.bind(this);
    this.openZoom = openZoom;
  }

  like(event) {
    event.target.classList.toggle("place-card__like-icon_liked");
  }

  remove() {
    this.cardElement
      .querySelector('.place-card__like-icon')
      .removeEventListener("click", this.like);

    this.cardElement
      .querySelector('.place-card__delete-icon')
      .removeEventListener("click", this.remove);

    this.cardElement
      .querySelector('.place-card__image')
      .removeEventListener("click", this.openZoom);

    this.cardElement.remove();
  }

  setEventListener(elemLike, elemDel, elemImg) {
    elemLike.addEventListener("click", this.like);
    elemDel.addEventListener("click", this.remove);
    elemImg.addEventListener("click", this.openZoom);
  }

  create() {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('place-card');
    const image = document.createElement('div');
    image.classList.add('place-card__image');
    image.style.backgroundImage = `url(${this.link})`;
    const buttonDelete = document.createElement('button');
    buttonDelete.classList.add('place-card__delete-icon');
    const description = document.createElement('div');
    description.classList.add('place-card__description');
    const nameCard = document.createElement('h3');
    nameCard.classList.add('place-card__name');
    nameCard.textContent = this.name;
    const buttonLike = document.createElement('button');
    buttonLike.classList.add('place-card__like-icon');

    cardContainer.appendChild(image);
    cardContainer.appendChild(description);
    image.appendChild(buttonDelete);
    description.appendChild(nameCard);
    description.appendChild(buttonLike);

    this.setEventListener(buttonLike, buttonDelete, image);

    this.cardElement = cardContainer;
    return this.cardElement;
  }
}