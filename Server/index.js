const express = require('express');

const adminRoute = require('./routes/adminroute');
require('dotenv').config()

const app = express();

app.use(express.json());

app.use((req,res,next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
	res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.append('Access-Control-Allow-Headers', 'Content-Type');
	next();
})

app.use('/admin', adminRoute);

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})