import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Esperienza } from '../../models/esperienza';
import { CardEsperienza } from '../../components/card-esperienza/card-esperienza';
import { EsperienzeService } from '../../services/esperienze-service';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CardEsperienza],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private esperienzaService = inject(EsperienzeService);
  // Recupera le esperienze in evidenza dal Service
  esperienze = this.esperienzaService.esperienzeInEvidenza;

  // Recupera gli stati di caricamento e di errore
  caricamento = this.esperienzaService.caricamento;
  errore = this.esperienzaService.errore;
}
