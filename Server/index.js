const express = require('express');

const basicRoute = require('./routes/route');


const app = express();

app.use(express.json());

app.use((req,res,next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
	res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.append('Access-Control-Allow-Headers', 'Content-Type');
	next();
})

app.post('/',(req,res) => {
    
})


const port = 3001;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})