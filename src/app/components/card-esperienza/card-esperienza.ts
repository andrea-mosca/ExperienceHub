import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Esperienza } from '../../models/esperienza';

import { CardEffect } from '../../directives/card-effect';
@Component({
  selector: 'app-card-esperienza',
  imports: [RouterLink, CardEffect],
  templateUrl: './card-esperienza.html',
  styleUrl: './card-esperienza.css',
})
export class CardEsperienza {
  @Input() esperienza!: Esperienza;
}
