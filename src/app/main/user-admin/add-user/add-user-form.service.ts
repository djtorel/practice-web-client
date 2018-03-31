import { FormBase } from './../../../common/form/models/form-base';
import { FormInput } from './../../../common/form/models/form-input';
import { Injectable } from '@angular/core';

@Injectable()
export class AddUserFormService {
  private _username = new FormInput({
    key: 'username',
    label: 'Username',
    placeHolder: 'Username..',
    required: true,
  });

  private _password = new FormInput({
    key: 'password',
    label: 'Password',
    placeHolder: 'Password..',
    required: true,
    type: 'password',
  });

  private _firstName = new FormInput({
    key: 'firstName',
    label: 'First Name',
    placeHolder: 'First Name..',
    required: true,
  });

  private _lastName = new FormInput({
    key: 'lastName',
    label: 'Last Name',
    placeHolder: 'Last Name..',
    required: true,
  });

  private _formElements: FormBase<any>[] = [
    this._username,
    this._password,
    this._firstName,
    this._lastName,
  ];

  constructor() { }

  get username() {
    return this._username;
  }

  get password() {
    return this._password;
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get formElements() {
    return this._formElements;
  }

}
