class Person {
  name;
  age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`SALUDO! ${this.name} y ${this.age} años`);
  }
}

// Const person1 = new Person("Abel", 31);
// person1.greeting();
// const person2 = new Person("David", 25);
// person2.greeting();

class Alumno extends Person {
  constructor(name, age, curse) {
    super(name, age);
    this.curse = curse;
  }

  greeting() {
    super.greeting(); // Hacer lo mismo que el metodo padre
    // Añadir más funcionalidades al método
    console.log(`Estudio ${this.curse}`);
  }
}

const alumno1 = new Alumno("Abel", 31, "FullStack Course");
alumno1.greeting();
