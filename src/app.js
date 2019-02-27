"use strict";

const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

const { normalizePort } = require('./utils/utils');

// routes
const index = require('./routes');
const users = require('./routes/user');

const PORT = process.env.PORT || 4000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());

app.use('/', index);
app.use('/user', users);

<<<<<<< HEAD
app.listen( normalizePort(PORT), () => console.log(`Listen on port ${PORT}`));
=======
app.listen(PORT, () => console.log(`Listen on port ${PORT}`));
>>>>>>> 8479d3e4f2c4b7af6c421f93d47fe3bf923bc0c2
