const express = require('express');

const adminRoute = require('./routes/adminRoute');
const teacherRoute = require("./routes/teacherRoute");
const classRoute = require('./routes/classRoute');
const studentRoute = require('./routes/studentRoute');
const courseRoute = require('./routes/courseRoute');
require('dotenv').config()

const app = express();

app.use(express.json());

app.use((req,res,next) => {
    res.append('Access-Control-Allow-Origin', [process.env.CLIENT_URL]);
	res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.append('Access-Control-Allow-Headers', 'Content-Type');
	next();
})

app.use('/admin', adminRoute);
app.use('/admin/teachers', teacherRoute);
app.use('/admin/classes', classRoute);
app.use('/admin/students', studentRoute);
app.use('/admin/courses', courseRoute);

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})