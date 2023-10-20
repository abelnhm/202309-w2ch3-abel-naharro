/* eslint-disable object-shorthand */

//FORMA LITERAL DE CONSTRUIR UN OBJETO
const user = {
  name: "Abel",
  age: 31,
  greeting: function () {
    // Metodo
    // Cuerpo función
    console.log(`Hola, soy ${this.name} y tengo ${this.age} años`); // (this) Referencia dentro de un objeto a referirse a nosotros mismos.
  },
};

user.greeting();


//OTRA FORMA (Tener una función que creara los objetos) //PATRON FACTORY
//ALGUIEN CAPAZ DE ACTUAR COMO UNA FACTORIA DE CREAR OBJETOS
function createObject(){
  return();
}

