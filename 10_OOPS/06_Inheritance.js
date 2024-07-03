class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

/* super(username) : This line calls the constructor of the parent class (User) with the username parameter. 
It initializes the username property for the Teacher instance using the User constructor. */

let teacher1 = new Teacher("Mr. Smith", "smith@example.com", "jspm");
teacher1.logMe();
console.log(teacher1.email);
console.log(teacher1.password);
teacher1.addCourse();

let user1 = new User("Akash");

console.log(teacher1 === user1);
console.log(User === Teacher);

console.log(teacher1 instanceof Teacher);
console.log(user1 instanceof User);

console.log(teacher1 instanceof User);
console.log(user1 instanceof Teacher);

console.log(Teacher instanceof User);
