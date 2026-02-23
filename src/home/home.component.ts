import { Component, signal } from '@angular/core';
import { DynamicFormComponent } from '../libs/shared/components/dynamic-form/dynamic-form.component';
import { SgTitleComponent } from '../libs/shared/components/sg-title/sg-title/sg-title.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    DynamicFormComponent,
    SgTitleComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  title = signal<string>('Dynamic Form');

}
