'use strict';

const placesList = document.querySelector('.places-list');
const bigImage = document.querySelector('.popup__content_image');
const formAddCard = document.forms.new;
const formEditProf = document.forms.edit;
const popupAddCard = document.querySelector('#popup-new');
const popupEditProf = document.querySelector('#popup-edit');
const name = document.querySelector('.user-info__name');
const job = document.querySelector('.user-info__job');
const photo = document.querySelector('.user-info__photo');
const myNick = document.querySelector('#nickname');
const aboutMe = document.querySelector('#job');
const errorNickname = document.querySelector('#error-nickname');
const errorJob = document.querySelector('#error-job');
const buttonNew = popupAddCard.querySelector('#button-new');
const buttonEdit = popupEditProf.querySelector('#button-edit');
const closeAdd = popupAddCard.querySelector('#close-add');
const closeEdit = popupEditProf.querySelector('#close-edit');
const zoomImage = document.querySelector('#big-image');
const closeZoom = zoomImage.querySelector('#close-zoom');
const myName = document.querySelector('#city');
const myLink = document.querySelector('#url');
const userInfoButton = document.querySelector('.user-info__button');
const userInfoEdit = document.querySelector('.user-info__edit');

const words = {
  validationLenght: 'Должно быть от 2 до 30 символов',
  validationFilling: 'Это обязательное поле'
}

const config = {
  authorization: '5abcb892-9b09-49d0-a359-d3b9d94e6211',
  ipCards: 'https://praktikum.tk/cohort10/cards',
  ipUsersMe: 'https://praktikum.tk/cohort10/users/me'
};

const popupZoom = new Popup(zoomImage, closeZoom);

const openZoom = (event) => {
  bigImage.style.backgroundImage = event.target.style.backgroundImage;
  return popupZoom.open();
};

const oneCard = (name, link, openZoom) => {
  const card = new Card(name, link, openZoom);
  return card.create();
};

const popupAdd = new Popup(popupAddCard, closeAdd, buttonNew, userInfoButton);
popupAdd.setEventListeners();

const popupEdit = new Popup(popupEditProf, closeEdit, buttonEdit, userInfoEdit, errorNickname, errorJob, myNick, aboutMe, name, job);
popupEdit.setEventListeners();

const api = new Api(config);

const cardList = new CardList(placesList, api, oneCard, openZoom, formAddCard, myName, myLink);
cardList.render();

const userInfo = new UserInfo(name, job, myNick, aboutMe, photo, api, formEditProf);
userInfo.setUserInfo();

const formAddCardValidator = new FormValidator(popupAddCard, words, buttonNew);
const formEditProfValidator = new FormValidator(popupEditProf, words, buttonEdit);




/**
 * Здравствуйте.
 * реализация класса API у вас хорошая.
 * Но, необходимо перенести всё из этого файла в классы, которые вы создавали в 8 спринте.
 * Объявление класса Api должно быть единыждым, а после вы передаёте его в другие классы.
 *
 * Примерно такое должно получиться:
    const container = document.querySelector('.places-list'); // место куда записывать карточки
    const cards = []; // массив с карточками
    const words = {ru: { validationLenght: 'Должно быть от 2 до 30 символов'}};
    const config = {authorization: "ключ",ip: "http://95.216.175.5/cohort7",}; // настройки
    const api = new Api(config);
    const card = new Card(api);
    const validation = new FormValidator({words:words});
    const cardList = new CardList({card:card, api:api});
    cardList.render(container, cards);
    const popupCard = new PopupCard({ validation:validation,api:api});
    const popupProfile = new PopupProfile({ validation:validation,api:api});
    const popupImage = new PopupImage();
  *
 *
   * Класс Api это отдельный класс, который ничего не знает о других классах и методах
   * Вы можете только получать данные из этого класса и использовать эти данные.
   * Представьте, что я дам Вам другой класс(допустим DataBase) к внутренностям которого вы не будете иметь доступ и даже прочитать этот файл не сможете
   * предварительно скажу, что у него есть несколько методов  getInitialCards deleteCard addCard, editUserInfo, setUserInfo и так далее
   * Который только возвращает/записывает данные, а вы можете получить только обращаясь к этим методам.
   * Соответственно в классе нельзя реализовать такие методы как querySelector или обратиться к другому классу, а только обратиться к методам сервера или базы.
   * Получается отдельная обязанность. Таким же способом Вы обращаетесь к серверу. Вы не знаете, что на сервере, даже язык программирования, но вы знаете методы
   * к которым обращаетесь и способ обращения. Это и есть обязанность отдельного класса.
   *
 *
 *
 */


/**
 * Здравствуйте
 * При изменении профиля возникает ошибка
 * UserInfo.js:30 Uncaught TypeError: this.updateUserInfo is not a function
   at HTMLFormElement.<anonymous> (UserInfo.js:30)

   При добавлении карточки тоже самое
   CardList.js:28 Uncaught TypeError: this.addCard is not a function
   at HTMLFormElement.<anonymous> (CardList.js:28)
 *
  Так же вы не перенесли все вызовы методов класса из текущего файла. Надо исправить

 *
 */