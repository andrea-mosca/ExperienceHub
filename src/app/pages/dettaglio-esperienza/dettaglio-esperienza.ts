import { Component, inject } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { NgClass } from '@angular/common';

import { EsperienzeService } from '../../services/esperienze-service';

import { DurataEsperienzaPipe } from '../../pipes/durata-esperienza-pipe';
import { DisponibilitaEsperienza } from '../../directives/disponibilita-esperienza';
import { DisponibilitaPipe } from '../../pipes/disponibilita-pipe';
import { StileEtichettaCategoriaPipe } from '../../pipes/stile-etichetta-categoria-pipe';
@Component({
  selector: 'app-dettaglio-esperienza',
  imports: [
    RouterLink,
    NgClass,
    DurataEsperienzaPipe,
    DisponibilitaEsperienza,
    DisponibilitaPipe,
    StileEtichettaCategoriaPipe,
  ],
  templateUrl: './dettaglio-esperienza.html',
  styleUrl: './dettaglio-esperienza.css',
})
export class DettaglioEsperienza {
  private route = inject(ActivatedRoute);
  private esperienzeService = inject(EsperienzeService);

  // Recupera l'ID dell'esperienza dall'URL
  private id = Number(this.route.snapshot.paramMap.get('id'));

  // Recupera dal Service il Signal dell'esperienza richiesta
  esperienza = this.esperienzeService.getEsperienzaById(this.id);

  caricamento = this.esperienzeService.caricamento;
  errore = this.esperienzeService.errore;
}
