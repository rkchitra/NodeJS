const fs = require('fs')
const fileName = "target.txt"

//watches out for changes; 2 args : filename & callback function 
//handle error; else the program terminates 
fs.readFile(fileName, (err, data) => {
	if(err)
	{
		console.log(err);
	}
	else
	{
		console.log(data.toString());
	}
})
console.log('Node JS Async Programming');


/*

Node JS takes the events and executes line by line or one by one. However, some events take longer than
others. Put both into event loop, realized the first one was taking too much time and left it to the 
callback function. It went ahead and executed the other event. Then the callback method returned the data
and then executed that. After this, it waits for more events. 

*/