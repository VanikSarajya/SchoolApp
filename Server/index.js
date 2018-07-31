const express = require('express');

const basicRoute = require('./routes/route');


const app = express();

app.use(express.json());

app.use('/',basicRoute)


const port = 3001;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})