import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { FormInput } from '../../models/form-input';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {
  @Input() input: FormInput;
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  get isValid() {
    return this.form.controls[this.input.key].valid;
  }

  get isTouched() {
    return this.form.controls[this.input.key].touched;
  }

  get isInputError() {
    return !this.isValid && this.isTouched;
  }

}
