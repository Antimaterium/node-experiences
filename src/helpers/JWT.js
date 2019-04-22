'use strict';
const jwt = require('jsonwebtoken');

module.exports.generate = function generate( req, res ) {
  if( !req.body._id ) {
    return res.status(401).send({
      auth: false,
      error: 'Login inválido!'
    });
  }

  const { _id } = req.body;  
  jwt.sign({ _id }, process.env.SECRET, { expiresIn: 30000 }, (error, token) => {
    if (error) {
      return res.status(500).send({ auth: false, error });
    }
    return res.status(200).send({ auth: true, _id, token });
  });

};

module.exports.verify = function verify(req, res, next) {
  const token = req.headers['x-access-token'];
  if (!token) {
    return res.status(401).send({
      auth: false,
      message: 'No token provided.'
    });
  }

  jwt.verify(token, process.env.SECRET, function (err, decoded) {    
    if (err) {
      return res.status(500).send({
        auth: false,
        message: 'Failed to authenticate token.'
      });
    }
    req._id = decoded._id;
    next();
  });
};
