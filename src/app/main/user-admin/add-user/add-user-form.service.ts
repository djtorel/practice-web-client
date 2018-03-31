import { AddUserInputs } from './add-user-inputs.model';
import { FormBase } from './../../../common/form/models/form-base';
import { FormInput } from './../../../common/form/models/form-input';
import { Injectable } from '@angular/core';

@Injectable()
export class AddUserFormService {

  private _formElements: FormBase<any>[] = [
    new FormInput({
      key: 'username',
      label: 'Username',
      placeHolder: 'Username..',
      required: true,
    }),
    new FormInput({
      key: 'password',
      label: 'Password',
      placeHolder: 'Password..',
      required: true,
      type: 'password',
    }),
    new FormInput({
      key: 'firstName',
      label: 'First Name',
      placeHolder: 'First Name..',
      required: true,
    }),
    new FormInput({
      key: 'lastName',
      label: 'Last Name',
      placeHolder: 'Last Name..',
      required: true,
    }),
  ];

  testThing: AddUserInputs;

  constructor() { }

  getInputs(): AddUserInputs {
    const inputs: any = {};
    this._formElements.forEach(el => {
      inputs[el.key] = el;
    });
    return inputs;
  }

  get formElements() {
    return this._formElements;
  }

}
