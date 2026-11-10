import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';

import { Esperienza } from '../../models/esperienza';
import { EsperienzeService } from '../../services/esperienze-service';

import { DurataEsperienzaPipe } from '../../pipes/durata-esperienza-pipe';
import { DisponibilitaEsperienza } from '../../directives/disponibilita-esperienza';

@Component({
  selector: 'app-dettaglio-esperienza',
  imports: [RouterLink, DurataEsperienzaPipe, DisponibilitaEsperienza],
  templateUrl: './dettaglio-esperienza.html',
  styleUrl: './dettaglio-esperienza.css',
})
export class DettaglioEsperienza implements OnInit {
  private route = inject(ActivatedRoute);
  private esperienzeService = inject(EsperienzeService);

  esperienza?: Esperienza;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.esperienza = this.esperienzeService.getEsperienzaById(id);
  }
}
