const numbers = new Array(100)

for (let i = 0; i < numbers.length; i++) {
    numbers[i] = i + 1;
}

const module7 = numbers.filter((number) => number % 7 === 0)

console.log(module7)