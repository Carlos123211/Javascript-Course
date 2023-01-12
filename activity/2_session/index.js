// Ejercicio 1

const person = function (object = {}) {
  return Object.keys(object);
}
let persona = {
  name: "Carlos",
  age: 27,
  profession: 'developer'
}
console.log(person(persona))

// Ejercicio 2
/**
 * this = self, referencia al contexto en el que se encuentra, si hacemos un this afuera de una funcion en modo no stricto te mostrará el objecto global(windows)
 * En modo estricto, this es undefined.
 * this se refiere al objecto propietario
 * en un arrow function se refiere al contexto de la funcion
 * en  un evento se refiere al evento que recibe
 */
// Ejercicio 3
//"use strict";
class InvertirCadena {
  cadenaInvertir = ''
  constructor(cadenaInvertir) {
    this.cadenaInvertir = cadenaInvertir

  }

  invertirValor = () => {
    if (this.cadenaInvertir) {
      return this.cadenaInvertir.split("").reverse().join("");
    } else {
      throw new Error('No puede ser cadena vacia')
    }
  }


}

let invertirCadena = new InvertirCadena('Hola Mundo')
console.log(invertirCadena.invertirValor())
//console.log(invertirCadena.nuevoMetodo())
/** 
 * Cuando se ejecuta sin cambiar cadenaInvertir, muestra un error, no puede ser cadena vacia.
 * Cuando se asigna valor a cadenaInvertir, este devuelve la cadena invertida
 * Se puede extender a la clase error para asi manejarlos
*/

// Ejercicio 4
class Login {
  username = '';
  password = '';
  constructor(username, password) {
    this.username = username;
    this.password = password
  }

  login = () => {
    if (this.username == 'admin' && this.password == 'passwd') {
      alert('User logged in')
    } else {
      alert('User or passwd incorrect')
    }
  }
}

// Ejercicio 5

const loginSuccess = document.getElementById('loginSuccess');
const loginFailure = document.getElementById('loginFailure');

loginSuccess.addEventListener('click', () => {
  let login = new Login('admin', 'passwd');
  login.login()
})

loginFailure.addEventListener('click', () => {
  let login = new Login('dsads', 'pwwwasswd');
  login.login()
})

// Ejercicio 6

let loginWitUsername = (username, password) => {
  return new Promise(function (resolve, rejected) {
    setTimeout(() => {
      if (username === "admin" && password === "passwd") {
        resolve("User logged in");
      } else {
        rejected("Error: invalid username or password");
      }
    }, 200);
  });
};

const loginSuccessAsync = document.getElementById('loginSuccessAsync');
const loginFailureAsync = document.getElementById('loginFailureAsync');

loginSuccessAsync.addEventListener('click', async () => {
  loginWitUsername("admin", "passwd").then((res) => {
    console.log(res)
  }).catch(err => {
    console.error(err)
  })

})

loginFailureAsync.addEventListener('click', async () => {
  loginWitUsername('dsads', 'pwwwasswd').then((res) => {
    console.log(res)
  }).catch(err => {
    console.error(err)
  });
})