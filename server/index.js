const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const config = require('./config/config');
const api = require('./routes/api');


const PORT = 4000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

//Routes
app.use('/api', api);

app.get('/', (req, res) => {
    console.log('Hello from Server !');
    res.send('Welcome');
});

app.listen(PORT, (req, res) => {
    console.clear();
    console.log(`App listening on PORT ${PORT}`);
});