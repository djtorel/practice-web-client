import { FormBase } from './../models/form-base';

import { Injectable } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Injectable()
export class FormControlService {

  constructor() { }

  toFormGroup(formElements: FormBase<any>[]) {
    const group: any = {};

    formElements.forEach(formEl => {
      group[formEl.key] = formEl.required
        ? new FormControl(formEl.value || '', Validators.required)
        : new FormControl(formEl.value || '');
    });

    return new FormGroup(group);
  }
}
