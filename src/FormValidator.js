class FormValidator {
  constructor(form, words, button) {
    this.form = form;
    this.words = words;
    this.button = button;
    this.setEventListeners();
  }

  checkInputValidity(event) {
    const error = document.querySelector(`#error-${event.target.id}`);
    error.textContent = '';
    if (event.target.validity.valueMissing) {
      error.textContent = this.words.validationFilling;
      return;
    }
    if (event.target.validity.tooShort || event.target.validity.tooLong) {
      error.textContent = this.words.validationLenght;
      return;
    }

    this.setSubmitButtonState(event);
  }

  setSubmitButtonState(event) {
    if (event.target.validity.valid) {
      this.button.classList.add('popup__button_active');
      this.button.removeAttribute('disabled');
    } else {
      this.button.classList.remove('popup__button_active');
      this.button.setAttribute('disabled', true);
    }
  }

  setEventListeners() {
    Array.from(this.form.querySelectorAll('.popup__input')).forEach((elem) => {
      elem.addEventListener('input', (event) => {
        this.checkInputValidity(event);
      });
    });
  }
}