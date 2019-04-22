const usersList = require('../mocks/users');

class User {

  constructor( id = null, password = null, email = null ) {
    this._id = id;
    this._email = email;
    this._password = password;
  }
  
  login() {
    return usersList.find( user => user.email === this._email && user.password === this._password );    
  }

  read() {
    return usersList.find( user => user._id === this._id );
  }

  set password( password ) {
    this._password = password;
  }
  set email( email ) {
    this._email = email;
  }

  get password() {
    return this._password;
  }
  get email() {
    return this._email;
  }
}

module.exports = User;
