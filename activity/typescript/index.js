// Ejercicio 1
var returnValues = function (_a) {
    var name = _a.name, age = _a.age, profession = _a.profession;
    return [name, age, profession];
};
console.log(returnValues({ name: 'Carlos', age: 26, profession: 'System' }));
// Ejercicio 2
var sumOrConcatenate = function (a, b) {
    if (typeof a === 'string' && typeof b === 'string') {
        return "".concat(a, "-").concat(b);
    }
    else if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else {
        return "".concat(a, ":").concat(b);
    }
};
console.log(sumOrConcatenate(4, 3)); // --> 7
console.log(sumOrConcatenate(4, "hello")); // --> 4:hello
console.log(sumOrConcatenate("hello", "world")); // --> hello-world
var isCar = function (vehicle) {
    return vehicle.turnOnEngine !== undefined;
};
var turnOnVehicle = function (vehicle) {
    vehicle.turnOnEngine();
    if (isCar(vehicle)) {
        vehicle.pressPedal();
    }
    else {
        vehicle.openThrottle();
    }
};
// Ejercicio 4
var removeFirstEntry = function (arr) {
    return arr.slice(1, arr.length);
};
var strArray = ['Hello', 'World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
var numArray = [1, 2, 3, 4, 5, 6, 7];
var mixedArray = ['Hello', 'I', 'have', 3, 'tasks'];
var unsupportedArray = [{ name: 'Lucas', surname: 'Fernandez' }, 'Hello', 22];
var newStrArray = removeFirstEntry(strArray);
var newNumArray = removeFirstEntry(numArray);
var newMixedArray = removeFirstEntry(mixedArray);
// const newUnsupportedArray = removeFirstEntry(unsupportedArray); --> will fail
console.log(newStrArray); // --> ['World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
console.log(newNumArray); // --> [2, 3, 4, 5, 6, 7];
console.log(newMixedArray); // --> ['I', 'have', 3, 'tasks'];
