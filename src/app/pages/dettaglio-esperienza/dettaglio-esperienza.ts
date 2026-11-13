import { Component, inject } from '@angular/core';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { NgClass } from '@angular/common';

import { EsperienzeService } from '../../services/esperienze-service';
import { AutenticazioneService } from '../../services/autenticazione-service';

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
  private router = inject(Router);
  private autenticazioneService = inject(AutenticazioneService);

  // Recupera l'ID dell'esperienza dall'URL
  private id = Number(this.route.snapshot.paramMap.get('id'));

  // Recupera dal Service il Signal dell'esperienza richiesta
  esperienza = this.esperienzeService.getEsperienzaById(this.id);

  caricamento = this.esperienzeService.caricamento;
  errore = this.esperienzeService.errore;

  mostraModuloPrenotazione = false;

  // Gestisce il click sul pulsante Prenota ora
  prenota(): void {
    // Se l'utente non è autenticato, lo mandiamo al Login
    if (!this.autenticazioneService.isAuthenticated()) {
      this.router.navigate(['/login'], {
        queryParams: {
          returnUrl: `/esperienza/${this.id}`,
        },
      });

      return;
    }

    // Se è autenticato, mostriamo il modulo
    this.mostraModuloPrenotazione = true;
  }
}
