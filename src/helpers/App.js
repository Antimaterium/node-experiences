'use strict';

const cors = require('cors');
const helmet = require('helmet');
const express = require('express');

const { normalizePort } = require('../utils/utils');
require('../config/config');

// routes
const indexRoute = require('../routes');
const users = require('../routes/user');

const App = function App() {
  this._app = express();
  this._port = normalizePort(process.env.PORT || 3000);
  this._middlewares();
  this._routes();
}

App.prototype.listen = function listen() {
  this._app.listen( this._port, () => console.log(`Listen on port ${this._port}`));
}

App.prototype._middlewares = function _middlewares() {
  this._app.use(helmet());
  this._app.use(express.json());
  this._app.use(express.urlencoded({
    extended: true
  }));
  this._app.use(cors());
}

App.prototype._routes = function _routes() {
  this._app.use('/', indexRoute);
  this._app.use('/user', users);
}

module.exports = new App();