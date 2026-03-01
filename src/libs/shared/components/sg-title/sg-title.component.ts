import { Component, input } from '@angular/core';

@Component({
  selector: 'sg-title',
  standalone: true,
  imports: [],
  templateUrl: './sg-title.component.html',
  styleUrl: './sg-title.component.css'
})
export class SgTitleComponent {

  title = input<string>();

}
