import { AsyncValidatorFn } from '@angular/forms';
import { of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

export function emailExistsValidator(): AsyncValidatorFn {
  const existingEmails = ['test@gmail.com', 'admin@gmail.com'];

  return (control) => {
    if (!control.value) {
      return of(null);
    }

    const exists = existingEmails.includes(control.value.toLowerCase());

    return of(exists).pipe(
      delay(800),
      map(isTaken => (isTaken ? { emailTaken: true } : null))
    );
  };
}