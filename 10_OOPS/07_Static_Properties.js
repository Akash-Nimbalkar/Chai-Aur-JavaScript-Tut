class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username is ${this.username}`);
  }

  static createID() {
    return `123`;
  }
}

const user1 = new User("akash");
//console.log(user1.createID());
console.log(User.createID());

// Static methods are accessed on the class itself (User.createID()), not on instances (user1.createID()).

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const teacher1 = new Teacher("Mrs. Jyoti", "jyoti@google.com");
teacher1.logMe();
teacher1.createID();
//static methods are not inherited by instances
