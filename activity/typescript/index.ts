// Ejercicio 1

interface Person {
    name: string;
    age: number;
    profession: string;
}


const returnValues = ({ name, age, profession }: Person): (string | number)[] => {
    return [name, age, profession]
};

console.log(returnValues({ name: 'Carlos', age: 26, profession: 'System' }))

// Ejercicio 2
const sumOrConcatenate = (a: string | number, b: string | number): (string | number) => {

    if (typeof a === 'string' && typeof b === 'string') {
        return `${a}-${b}`
    } else if (typeof a === 'number' && typeof b === 'number') {
        return a + b
    } else {
        return `${a}:${b}`
    }

}

console.log(sumOrConcatenate(4, 3)); // --> 7
console.log(sumOrConcatenate(4, "hello")); // --> 4:hello
console.log(sumOrConcatenate("hello", "world")); // --> hello-world

// Ejercicio 3

interface Car {

    tires: number,
    turnOnEngine(): void,
    pressPedal(): void,

}

interface Motorcycle {
    tires: number,
    turnOnEngine(): void,
    openThrottle(): void,
}


const isCar = (vehicle: Car | Motorcycle): vehicle is Car => {
    return (vehicle as Car).turnOnEngine !== undefined;
}

const turnOnVehicle = (vehicle: Car | Motorcycle): void => {

    vehicle.turnOnEngine();

    if (isCar(vehicle)) {
        vehicle.pressPedal()
    } else {
        vehicle.openThrottle();
    }


}

// Ejercicio 4

const removeFirstEntry = (arr: Array<number | string>): Array<number | string> => {


    return arr.slice(1, arr.length)

}

const strArray: string[] = ['Hello', 'World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
const numArray: number[] = [1, 2, 3, 4, 5, 6, 7];
const mixedArray: Array<number | string> = ['Hello', 'I', 'have', 3, 'tasks'];
const unsupportedArray = [{ name: 'Lucas', surname: 'Fernandez' }, 'Hello', 22];
const newStrArray = removeFirstEntry(strArray);
const newNumArray = removeFirstEntry(numArray);
const newMixedArray = removeFirstEntry(mixedArray);
// const newUnsupportedArray = removeFirstEntry(unsupportedArray); --> will fail
console.log(newStrArray); // --> ['World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
console.log(newNumArray); // --> [2, 3, 4, 5, 6, 7];
console.log(newMixedArray); // --> ['I', 'have', 3, 'tasks'];
