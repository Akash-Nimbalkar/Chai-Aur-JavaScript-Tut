class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }

  set email(mail) {
    this._email = mail;
  }
  get password() {
    return `${this._password}akash`;
  }

  set password(val) {
    this._password = val;
  }
}

const akash = new User("akash@ai.com", "abc");
console.log(akash.password);
console.log(akash.email);
