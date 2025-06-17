const fs = require('fs');
const math = require('./math')

fs.writeFile('./test.txt', 'Hello World in Javascript', () => {});

// console.log(__filename, __dirname)
console.log(math.add(2, 4))
console.log(math.subtract(2, 4))
console.log(math.divide(2, 4))
console.log(math.multiply(2, 4))
