'use strict';

module.exports.normalizePort = (val) => {
  let port = (typeof val === 'string') ? parseInt(val) : val;
  if (isNaN(port)) {
    return val;
  } else if (port >= 0) {
    return port;
  }
  return false;
};

module.exports.handleError = (error) => {
  let errorMessage = `${error.name}: ${error.message}`;
  return Promise.reject(new Error(errorMessage));
};