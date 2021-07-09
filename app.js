const fs = require('fs');
const fileName = "target.txt";

const errHandler = err => console.log(err);

const dataHandler = data => console.log(data.toString());

fs.readFile(fileName, (err,data) => {
	if(err) errHandler(err);

	else	dataHandler(data);

});
console.log("\nNode JS Programming!\n");