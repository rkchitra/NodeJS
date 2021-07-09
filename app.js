const fs = require('fs')
const fileName = "target.txt"

//watches out for changes; 2 args : filename & callback function 
fs.watch(fileName,() => console.log("File changed"))