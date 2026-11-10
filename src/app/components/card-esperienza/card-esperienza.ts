import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

import { Esperienza } from '../../models/esperienza';

import { CardEffect } from '../../directives/card-effect';
import { StileEtichettaCategoriaPipe } from '../../pipes/stile-etichetta-categoria-pipe';
@Component({
  selector: 'app-card-esperienza',
  imports: [RouterLink, CardEffect, StileEtichettaCategoriaPipe, NgClass],
  templateUrl: './card-esperienza.html',
  styleUrl: './card-esperienza.css',
})
export class CardEsperienza {
  @Input() esperienza!: Esperienza;
}
