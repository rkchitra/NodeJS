const fs = require('fs')
const fileName = "target.txt"

const data = fs.readFileSync(fileName) //synchronous model; blocking;
console.log(data.toString())

console.log("\nNode JS Synchronous Programming ")