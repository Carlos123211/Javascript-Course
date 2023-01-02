// Ejercicio 1
import "./aboutme.js";
import "./ejercicio4.js";
console.log(this)
console.log("Ejercicio 1");

// Ejercicio 2
// la importacion se ejecuta antes, porque va previo al console.log()

// Ejercicio 3
// Consola, sirve para ver los errores y console.log/error/table, ect() que uno ejecute.
// Networking: sirve para ver los llamados/elementos importador(imagenes, fuentes, entre otros)
// Elements o Inspector, sirve para ver la los elementos en el HTML de la web desarrollada y poder hacer pruebas tanto de estilos como de agregar o quitar elementos.
// Ejercicio 4

// Ejercicio 5
// 1.-El script type="module", solo funciona en http(s); mientras que el script funciona en localhost incluvisve
// 2.- El script type="module", tiene palabras reservadas, export e import;
// 3.- Un codigo en un module, solo se evalua la primera vez cuando se importa.
// 4.- En un module, this es indefinido. 
// 5.- Los module son diferidos.
// Ejercicio 6

const formatter = {
    prefix: 'Hello',
    append: (val) => { return `${formatter.prefix} ${val}` },
    toLowerString: (val = '') => { return val.toLocaleLowerCase() }
}

console.log(formatter.append('Carlos'));
console.log(formatter.toLowerString("I'm Carlos"))
