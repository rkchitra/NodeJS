const express = require('express')
const app = express() //executed the express app; it's now ready to listen to the incoming request 
//the properties and methods of the express package can be accessed using the app variable 


//listen to incoming request from browser
app.get('/',(req, res) => {
	res.send("Hello from express!")
})

app.listen(3000)