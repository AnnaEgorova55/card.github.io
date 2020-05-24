class Popup {
  constructor(popup, popupClose, button, userInfo, errorNickname, errorJob, myNick, aboutMe, name, job) {
    this.popup = popup;
    this.popupClose = popupClose;
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.button = button;
    this.userInfo = userInfo;
    this.errorNickname = errorNickname;
    this.errorJob = errorJob;
    this.myNick = myNick;
    this.aboutMe = aboutMe;
    this.name = name;
    this.job = job;
    this.setEventListenersForClose();
  }

  cleanPopup() {
    this.errorNickname.textContent = '';
    this.errorJob.textContent = '';

    this.myNick.value = this.name.textContent;
    this.aboutMe.value = this.job.textContent;
  }

  open(event) {
    if (event.target.classList.contains('user-info__edit')) {
      this.cleanPopup();
    }

    this.popup.classList.add('popup_is-opened');
  }

  close() {
    this.popup.classList.remove('popup_is-opened');
  }

  setEventListeners() {
    this.userInfo.addEventListener('click', this.open);

    this.popup.addEventListener('submit', (event) => {
      if (event.key === 'Enter') {
        this.close();
      }
    });

    this.button.addEventListener('click', this.close);
  }

  setEventListenersForClose() {
    this.popupClose.addEventListener('click', this.close);
  }

}