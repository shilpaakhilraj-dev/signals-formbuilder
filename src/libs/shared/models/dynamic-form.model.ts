import { AsyncValidatorFn, ValidatorFn } from '@angular/forms';

export interface FormFieldConfig {
  key: string;
  label: string;
  type: 'text' | 'number' | 'password' | 'email';
  value?: any;
  placeholder?: string;
  required?: boolean;
  validators?: ValidatorConfig[];
  asyncValidators?: AsyncValidatorConfig[];
  /* layout config */
  row: number;
  col?: string;
  class?: string; 
}

export interface ValidatorConfig {
  validator: ValidatorFn;
  errorKey: string;
  message: string;
}

export interface AsyncValidatorConfig {
  validator: AsyncValidatorFn;
  errorKey: string;
  message: string;
}