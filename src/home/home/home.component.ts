import { Component, signal } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { formConfiguration } from '../constants/home.enum';
import { SgTitleComponent } from '../../libs/shared/components/sg-title/sg-title.component';
import { DynamicFormComponent } from '../../libs/shared/components/dynamic-form/dynamic-form.component';
import { FormFieldConfig } from '../../libs/shared/models/dynamic-form.model';
import { CommonModule } from '@angular/common';
import { SgCardComponent } from '../../libs/shared/components/sg-card/sg-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    SgTitleComponent,
    DynamicFormComponent,
    SgCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  form = signal(new FormGroup({}));

  title = signal<string>('Dynamic Form');

  config = signal<FormFieldConfig[]>(formConfiguration);

  logValues(event: Record<string, any>) {
    console.log('event', event);
  }
}
