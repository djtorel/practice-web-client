import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FormControlService } from './../../../common/form/services/form-control.service';
import { AddUserFormService } from './add-user-form.service';
import { FormInput } from '../../../common/form/models/form-input';
import { FormBase } from '../../../common/form/models/form-base';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  providers: [FormControlService, AddUserFormService],
})
export class AddUserComponent implements OnInit {
  form: FormGroup;
  username: FormInput;
  password: FormInput;
  firstName: FormInput;
  lastName: FormInput;

  constructor(private fcs: FormControlService, private userService: AddUserFormService) {
  }

  ngOnInit() {
    this.form = this.fcs.toFormGroup(this.userService.formElements);
    this.username = this.userService.username;
    this.password = this.userService.password;
    this.firstName = this.userService.firstName;
    this.lastName = this.userService.lastName;
  }

  get isFormError() {
    const isValid = this.form.valid;
    const isTouched = this.form.touched;

    return !isValid && isTouched;
  }


}
