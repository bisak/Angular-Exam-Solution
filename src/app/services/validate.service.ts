import { Injectable } from '@angular/core';
import isEmail from 'validator/lib/isEmail';

@Injectable()
export class ValidateService {
  constructor() {
  }


  validateRegisterInput(data) {
    if (!data.name) {
      return {
        isValid: false,
        msg: 'Username is required'
      };
    }
    if (data.name.length < 6) {
      return {
        isValid: false,
        msg: 'Username sould be at least 6 characters long'
      };
    }
    if (!data.email) {
      return {
        isValid: false,
        msg: 'Email is required'
      };
    }
    if (!isEmail(data.email)) {
      return {
        isValid: false,
        msg: 'Please provide a valid email'
      };
    }
    if (!data.password) {
      return {
        isValid: false,
        msg: 'Password is required'
      };
    }
    if (data.password != data.passwordConfirm) {
      return {
        isValid: false,
        msg: 'Passwords didn\'t match'
      };
    }
    if (data.password.length < 6) {
      return {
        isValid: false,
        msg: 'Password should be at least 6 characters long'
      };
    }
    if (data.password.length > 50) {
      return {
        isValid: false,
        msg: 'Password should be less than 50 characters long'
      };
    }
    return {
      isValid: true,
      msg: ''
    };
  }
}
