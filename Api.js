class Api {
  constructor(options) {
    this.options = options;
  }

  getRequest() {
    return fetch(this.options.ipUsersMe, {
      headers: {
        authorization: this.options.authorization,
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })

      .then((result) => {
        return result;
      })

      .catch((err) => {
        console.log(`Ошибка: ${err}. Запрос не выполнен.`);
      });
  }

  getInitialCards() {
    return fetch(this.options.ipCards, {
      headers: {
        authorization: this.options.authorization,
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })

      .catch((err) => {
        console.log(`Ошибка: ${err}. Запрос не выполнен.`);
      });
  }

  editProf(name, about) {
    return fetch(this.options.ipUsersMe, {
      method: 'PATCH',
      headers: {
        authorization: this.options.authorization,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        about: about
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })

      .then((result) => {
        return result;
      })

      .catch((err) => {
        console.log(`Ошибка: ${err}. Запрос не выполнен.`);
      });
  }

}