import { Component, input } from '@angular/core';
import { CardConfig } from '../../models/card-config.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sg-card',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './sg-card.component.html',
  styleUrl: './sg-card.component.css'
})
export class SgCardComponent {

  cardConfig = input<CardConfig>({
    height: 'auto',
    width: 'auto',
    padding: '16px'
  });
}
