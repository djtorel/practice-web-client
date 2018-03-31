import { FormBase } from './form-base';

export class FormInput extends FormBase<string> {
  controlType = 'input';
  placeHolder: string;
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.placeHolder = options['placeHolder'] || '',
    this.type = options['type'] || '';
  }
}
