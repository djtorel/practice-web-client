import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FormControlService } from './../../../common/form/services/form-control.service';
import { AddUserFormService } from './add-user-form.service';
import { FormInput } from '../../../common/form/models/form-input';
import { FormBase } from '../../../common/form/models/form-base';
import { AddUserInputs } from './add-user-inputs.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  providers: [FormControlService, AddUserFormService],
})
export class AddUserComponent implements OnInit {
  form: FormGroup;
  formInputs: AddUserInputs;

  constructor(private fcs: FormControlService, private userService: AddUserFormService) {
  }

  ngOnInit() {
    this.form = this.fcs.toFormGroup(this.userService.formElements);
    this.formInputs = this.userService.getInputs();
  }

  get isFormError() {
    const isValid = this.form.valid;
    const isTouched = this.form.touched;

    return !isValid && isTouched;
  }


}
