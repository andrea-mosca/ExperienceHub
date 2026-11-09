import { Component } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';

import { Esperienza } from '../../models/esperienza';
import { EsperienzeService } from '../../services/esperienze-service';

@Component({
  selector: 'app-dettaglio-esperienza',
  imports: [RouterLink],
  templateUrl: './dettaglio-esperienza.html',
  styleUrl: './dettaglio-esperienza.css',
})
export class DettaglioEsperienza {
  esperienza?: Esperienza;

  constructor(
    private route: ActivatedRoute,
    private esperienzaService: EsperienzeService,
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.esperienza = this.esperienzaService.getEsperienzaById(id);
  }
}
