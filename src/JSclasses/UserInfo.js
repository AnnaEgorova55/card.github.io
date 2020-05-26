export default class UserInfo {
  constructor(name, job, myNick, aboutMe, avatar, api, formEditProf) {
    this.name = name;
    this.job = job;
    this.myNick = myNick;
    this.aboutMe = aboutMe;
    this.avatar = avatar;
    this.api = api;
    this.formEditProf = formEditProf;
    this.updateUserInfo = this.updateUserInfo.bind(this);
    this.setEventListener();
  }

  setUserInfo() {
    this.api.getRequest().then((res) => {
      this.name.textContent = res.name;
      this.job.textContent = res.about;
      this.myNick.value = res.name;
      this.aboutMe.value = res.about;
      this.avatar.style.backgroundImage = `url(${res.avatar})`;
    });
  }

  updateUserInfo() {
    this.api.editProf(this.myNick.value, this.aboutMe.value).then(() => {
      this.name.textContent = this.myNick.value;
      this.job.textContent = this.aboutMe.value;
    });
  }

  setEventListener() {
    this.formEditProf.addEventListener('submit', (event) => {
      event.preventDefault();
      this.updateUserInfo();
      this.formEditProf.reset();
    });
  }
}