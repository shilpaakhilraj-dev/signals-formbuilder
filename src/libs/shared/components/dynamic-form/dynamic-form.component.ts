import { Component, computed, effect, inject, Injector, input, output, runInInjectionContext, Signal, signal } from '@angular/core';
import { SgInputComponent } from '../sg-input/sg-input.component';
import { AsyncValidatorFn, FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormFieldConfig } from '../../models/dynamic-form.model';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'dynamic-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SgInputComponent
  ],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css'
})

export class DynamicFormComponent {

  // SIGNAL INPUTS
  config = input<FormFieldConfig[]>([]);

  form = input.required<FormGroup>();

  buttonLabel = input<string>('Submit');

  // SIGNAL OUTPUTS
  submitForm = output<Record<string, any>>();

  // SIGNAL VARIABLES
  submitTriggered = signal(false);

  formValues!: Signal<Record<string, any>>;

  private injector = inject(Injector);

  // GROUPING THE FIELDS ACCORDING TO THE ROW NO
  groupedFields = computed(() => {
    const rows = new Map<number, FormFieldConfig[]>();
    for (const field of this.config()) {
      if (!rows.has(field.row)) {
        rows.set(field.row, []);
      }
      rows.get(field.row)!.push(field);
    }
    return Array.from(rows.entries()).sort(
      ([a], [b]) => a - b
    );
  });

  constructor() {
    effect(() => {
      console.log(this.groupedFields());
      this.buildForm();
    })
  }

  ngOnInit(): void {
    this.formValues = runInInjectionContext(this.injector, () =>
      toSignal(this.form().valueChanges, {
        initialValue: this.form().value
      })
    );
  }

  buildForm(): void {
    this.config().forEach(field => {
      const syncValidators: ValidatorFn[] = [];

      if (field.required) {
        syncValidators.push(Validators.required);
      }

      if (field.validators?.length) {
        syncValidators.push(
          ...field.validators.map(v => v.validator)
        );
      }

      const asyncValidators: AsyncValidatorFn[] = field.asyncValidators?.map(v => v.validator) ?? [];

      const control = new FormControl(
        field.value ?? null,
        syncValidators,
        asyncValidators
      );

      this.form().addControl(
        field.key, 
        control,
        { emitEvent: false }
      );
    });

    this.form().updateValueAndValidity({ emitEvent: false });
  }

  onSubmit() {
    this.submitTriggered.set(true);
    if (this.form().invalid) {
      this.form().markAllAsTouched();
    } else {
      this.submitForm.emit(this.formValues)
    }
    console.log(this.formValues())
  }

  getErrorMessages(field: FormFieldConfig): Record<string, string> {
    return {
      ...(field.validators ?? []).reduce((acc, v) => {
        acc[v.errorKey] = v.message;
        return acc;
      }, {} as Record<string, string>),

      ...(field.asyncValidators ?? []).reduce((acc, v) => {
        acc[v.errorKey] = v.message;
        return acc;
      }, {} as Record<string, string>)
    };
  }

}
