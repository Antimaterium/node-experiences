"use strict";

const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

// routes
const index = require('./routes');
const users = require('./routes/user');

const PORT = 4000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());

app.use('/', index);
app.use('/user', users);

app.listen(PORT, () => console.log(`Listen on port ${PORT}`));
