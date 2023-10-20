/* eslint-disable new-cap */
/* eslint-disable object-shorthand */
function foo() {
  console.log("Soy foo Esto es this", this);
  // Modo estrcito impide que una funcion pueda leer this, porque this es el entorno global
}

// PATRON FUNCTION (Mecanismo estandar)
foo();

// PATRON METHOD (asignar a propidad de un objeto y ahora te vamos a ejecutar, pasa a ser un metodo en vez de una función independiente)
const obj = {
  name: "Obj1",
  foo: foo,
};

obj.foo();

// PATRON CONSTRUCTOR (coger una función y decir que se va a ejecutar con un operador new por delante)
// 1 - Se crea un nuevo objeto
// 2 - la función toma ese nuevo objeto como this y hace lo que sea con el
// 3 - Devuelve el nuevo objeto para que se ejecute en new object
const newObjt = new foo();
console.log(newObjt);

// PATRON APPLY (tengo un objeto nuevo, le asigno una función para que ejecute el metodo)
const obj2 = {
  name: "obj2",
};

foo.apply(obj2);
