function User(email, password) {

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email;
    },
    set: function (value) {
      this._email = value;
    },
  });

  Object.defineProperty(this, "password", {
    get: function () {
      return this._password.toUpperCase();
    },
    set: function (value) {
      this._password = value;
    },
  });

  // now setters will run and store into _email and _password

    this.email = email;
  this.password = password;
}

const chai = new User("dish@dis.com", "diss");
console.log(chai.email);    // dish@dis.com
console.log(chai.password); // diss
