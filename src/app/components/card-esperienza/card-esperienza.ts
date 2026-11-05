import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Esperienza } from '../../models/esperienza';
@Component({
  selector: 'app-card-esperienza',
  imports: [RouterLink],
  templateUrl: './card-esperienza.html',
  styleUrl: './card-esperienza.css',
})
export class CardEsperienza {
  @Input() esperienza!: Esperienza;
}
