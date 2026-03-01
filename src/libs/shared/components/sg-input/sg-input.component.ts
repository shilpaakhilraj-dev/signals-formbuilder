import { Component, computed, input, Optional, Self, signal } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'sg-input',
  imports: [],
  standalone: true,
  templateUrl: './sg-input.component.html',
  styleUrl: './sg-input.component.css'
})

export class SgInputComponent implements ControlValueAccessor {

  /* ───── Signal Inputs ───── */

  label = input<string>('');

  name = input<string>(''); 

  type = input<'text' | 'number' | 'password' | 'email'>('text');

  placeholder = input<string>('');

  required = input<boolean>(false);

  icon = input<string | null>(null);

  submitTriggered = input<boolean>(false);

  errorMessages = input<Record<string, string>>({});

  /* ───── Signals ───── */

  private _value = signal<string | number | null>(null);

  disabled = signal(false);

  touched = signal(false);

  value = computed(() => this._value());

  errorMessage = computed(() => {
    const control = this.ngControl?.control;
    if (!control || !control.errors) return null;

    const messages = this.errorMessages();

    for (const errorKey of Object.keys(control.errors)) {
      if (messages[errorKey]) {
        return messages[errorKey];
      }
    }

    return null;
  });

  /* ───── CVA ───── */
  private onChange = (value: any) => { };

  private onTouched = () => { };

  /* ───── NgControl hookup ───── */
  constructor(@Optional() @Self() public ngControl: NgControl) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  /* ───── Validation State ───── */
  get isInvalid(): boolean {
    const control = this.ngControl?.control;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || this.submitTriggered())
    );
  }

  writeValue(value: any): void {
    this._value.set(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  /* ───── Handlers ───── */
  handleInput(event: Event) {
    const el = event.target as HTMLInputElement;
    const value =
      this.type() === 'number' ? Number(el.value) : el.value;

    this._value.set(value);
    this.onChange(value);
  }

  handleBlur() {
    if (this.required() && !this._value()) {
      this.touched.set(true);
      this.onTouched();
    }
  }

}
