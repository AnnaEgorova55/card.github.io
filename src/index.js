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


import "./style.css";