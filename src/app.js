'use strict';

const cors = require('cors');
const helmet = require('helmet');
const express = require('express');
require('./config/config');

const { normalizePort } = require('./utils/utils');

const PORT = normalizePort(process.env.PORT || 3000);
const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cors());

app.use('/', require('./routes'));

app.listen( PORT, () => console.log(`Listen on port ${PORT}`));
