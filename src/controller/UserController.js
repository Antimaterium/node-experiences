'use strict';
const Joi = require('joi');
const User = require('../models/UserModel');
const { mapValidation } = require('../utils/utils');

class UserController {
  constructor() { }

  static login(req, res, next) {
    const validates = {
      email: req.body.email,
      password: req.body.password,
    };
    const schema = Joi.object().keys({
      email: Joi.string().email().min(3).max(30).required(),
      password: Joi.string().alphanum().required()
    });
    
    Joi.validate(validates, schema, err => {
      if (!err) {
        return;
      }

      res.status(401).send({
        auth: false,
        error: mapValidation(err)
      });
    });

    const { email, password } = req.body;
    const user = new User();
    user.email = email || '';
    user.password = password || '';

    const result = user.login();
    if (!result) {
      res.status(500).send({ auth: false, error: 'Login inválido!' });
    }

    req.body = {
      auth: true,
      _id: result._id,
    };
    next();
  }

  static read(req, res) {
    const validates = {
      _id: req.params._id,
    };

    const schema = Joi.object().keys({
      _id: Joi.number().integer().positive().required()
    });

    Joi.validate(validates, schema, err => {
      if (!err) {
        return;
      }
      res.status(401).send({ error: mapValidation(err) });
    });

    const { _id } = req.params;
    const user = new User( Number(_id) );    
    const result = user.read();
    if (!result) {
      res.status(500).send({ error: 'User not founded!' });
    }

    res.status(200).send({ result });
  }

}


module.exports = UserController;