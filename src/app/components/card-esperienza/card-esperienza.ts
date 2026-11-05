import { Component, Input } from '@angular/core';
import { Esperienza } from '../../models/esperienza';
@Component({
  selector: 'app-card-esperienza',
  imports: [],
  templateUrl: './card-esperienza.html',
  styleUrl: './card-esperienza.css',
})
export class CardEsperienza {
  @Input() esperienza!: Esperienza;
}
