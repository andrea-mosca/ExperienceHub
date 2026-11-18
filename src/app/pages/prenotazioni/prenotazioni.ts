import { Component, OnInit, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

import { PrenotazioniService } from '../../services/prenotazioni-service';
import { AutenticazioneService } from '../../services/autenticazione-service';

@Component({
  selector: 'app-prenotazioni',
  imports: [DatePipe, RouterLink],
  templateUrl: './prenotazioni.html',
  styleUrl: './prenotazioni.css',
})
export class Prenotazioni implements OnInit {
  private prenotazioniService = inject(PrenotazioniService);
  private autenticazioneService = inject(AutenticazioneService);

  caricamento = this.prenotazioniService.caricamento;
  errore = this.prenotazioniService.errore;

  // Recupera il Signal contenente le prenotazioni
  prenotazioni = this.prenotazioniService.prenotazioni;

  ricaricaPrenotazioni(): void {
    const utente = this.autenticazioneService.utente();

    if (!utente) return;

    this.prenotazioniService.caricaPrenotazioni(utente.email);
  }
  ngOnInit(): void {
    this.ricaricaPrenotazioni();
  }
}
