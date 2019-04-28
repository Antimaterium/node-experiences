'use strict';

const { expect, should } = require('chai');
const User = require('../src/models/UserModel');
should();

describe('User Model', () => {

  before(() => {
    this.user = new User();
    this.user.email = 'dev@dev.com';
    this.user.password = 'dEVDEvdeVdEvDev';
  });

  context('login', () => {

    it('should return undefined when e-mail is batata@batata.com and password is batata', () => {
      this.user.email = 'batata@batata.com';
      this.user.password = 'batata';
      expect(this.user.login()).to.be.equal(undefined);
    });

    it('should return a user when e-mail is user@user.com and password is I_have_a_semi_secure_password', () => {
      const userExpected = {
        _id: 2,
        username: 'user',
        email: 'user@user.com',
        password: 'I_have_a_semi_secure_password'
      };
      this.user.email = 'user@user.com';
      this.user.password = 'I_have_a_semi_secure_password';
      this.user.login().should.be.deep.equal(userExpected);
    });

  });
  
});