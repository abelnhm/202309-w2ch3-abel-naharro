function User(name, age) {
  this.name = name;
  this.age = age;

  User.prototype.greeting = function () {
    console.log(`SALUDO! ${this.name}`);
  };
}

const user2 = new User("Pepe", 22);
console.log(user2);
