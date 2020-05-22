class CardList {
  constructor(container, api, renderCards, openZoom, formAddCard, myName, myLink) {
    this.container = container;
    this.api = api;
    this.renderCards = renderCards;
    this.openZoom = openZoom;
    this.formAddCard = formAddCard;
    this.addCard = this.addCard.bind(this);
    this.myName = myName;
    this.myLink = myLink;
    this.setEventListener();
  }

  addCard(obj) {
    const newCard = this.renderCards(obj.name, obj.link, this.openZoom);
    this.container.appendChild(newCard);
  }

  render() {
    this.api.getInitialCards().then((res) => {
      res.forEach((elem) => {
        this.addCard(elem);
      });
    });
  }

  setEventListener() {
    this.formAddCard.addEventListener('submit', (event) => {
      const obj = {
        name: this.myName.value,
        link: this.myLink.value
      };
      event.preventDefault();
      this.addCard(obj);
      this.formAddCard.reset();
    });
  }

}