const numbers = [1, 2, 3, 4, 5];

// map
const doubled = numbers.map(n => n * 2);
console.log(doubled);

// filter
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens);

// reduce
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
