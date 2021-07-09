
const {sum,sub} = require('./helpers');  //method available only in this env, not browser env

const http = require('http'); //core node js module 

const server = http.createServer((req,res) => {

	res.end("Hello World! (updated) 2.0!");
}); //http module comes with a method for creating server 

server.listen(3000);

//var let const 
var total = sum(10,200);
var diff = sub(200,100);
console.log("Total:",total,"\nDifference:",diff);