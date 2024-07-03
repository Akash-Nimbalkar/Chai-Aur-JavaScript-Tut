const User = {
  _email: "akash@ai.com",
  _password: "abc@123",

  get email() {
    return this._email.toUpperCase();
  },

  set email(val) {
    this._email = val;
  },
};

const tea = Object.create(User);
console.log(tea);
console.log(tea.email);
tea.email = "newemail@example.com";
console.log(tea.email);
console.log(tea._email);
console.log(User._email);
