import { Component, OnInit, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

import { Prenotazione } from '../../models/prenotazione';
import { PrenotazioniService } from '../../services/prenotazioni-service';
import { AutenticazioneService } from '../../services/autenticazione-service';
import { EsperienzeService } from '../../services/esperienze-service';
@Component({
  selector: 'app-prenotazioni',
  imports: [DatePipe, RouterLink],
  templateUrl: './prenotazioni.html',
  styleUrl: './prenotazioni.css',
})
export class Prenotazioni implements OnInit {
  private prenotazioniService = inject(PrenotazioniService);
  private autenticazioneService = inject(AutenticazioneService);
  private esperienzeService = inject(EsperienzeService);

  caricamento = this.prenotazioniService.caricamento;
  errore = this.prenotazioniService.errore;
  caricamentoEsperienze = this.esperienzeService.caricamento;

  // Recupera il Signal contenente le prenotazioni
  prenotazioni = this.prenotazioniService.prenotazioni;
  // quale prenotazione stiamo annullando
  annullamentoInCorso = signal<string | null>(null);
  // esito operazione annullamento
  messaggioAnnullamento = signal<{
    tipo: 'successo' | 'errore' | 'avviso';
    testo: string;
  } | null>(null);

  ricaricaPrenotazioni(): void {
    const utente = this.autenticazioneService.utente();

    if (!utente) return;

    this.prenotazioniService.caricaPrenotazioni(utente.email);
  }

  annullaPrenotazione(prenotazione: Prenotazione): void {
    // Chiediamo conferma prima di procedere
    const conferma = window.confirm(
      `Vuoi davvero annullare la prenotazione di "${prenotazione.titoloEsperienza}"?`,
    );

    if (!conferma || this.annullamentoInCorso()) return;

    // Recuperiamo l'esperienza associata alla prenotazione
    const esperienza = this.esperienzeService
      .esperienze()
      .find((e) => String(e.id) === String(prenotazione.esperienzaId));

    if (!esperienza) {
      this.messaggioAnnullamento.set({
        tipo: 'errore',
        testo: 'Non è stato possibile recuperare i dati dell’esperienza.',
      });
      return;
    }

    this.annullamentoInCorso.set(prenotazione.id);
    this.messaggioAnnullamento.set(null);

    // Eliminiamo la prenotazione da MockAPI
    this.prenotazioniService.eliminaPrenotazione(prenotazione.id).subscribe({
      next: () => {
        // Ripristiniamo i posti precedentemente prenotati
        const nuoviPostiDisponibili = Math.min(
          esperienza.postiTotali,
          esperienza.postiDisponibili + prenotazione.numeroPosti,
        );

        this.esperienzeService
          .aggiornaPostiDisponibili(esperienza.id, nuoviPostiDisponibili)
          .subscribe({
            next: () => {
              this.annullamentoInCorso.set(null);

              this.messaggioAnnullamento.set({
                tipo: 'successo',
                testo: 'Prenotazione annullata correttamente.',
              });
            },
            error: (errore) => {
              console.error('Errore aggiornamento disponibilità:', errore);

              this.annullamentoInCorso.set(null);

              this.messaggioAnnullamento.set({
                tipo: 'avviso',
                testo:
                  'La prenotazione è stata annullata, ma non è stato possibile ripristinare i posti disponibili.',
              });
            },
          });
      },
      error: (errore) => {
        console.error('Errore annullamento prenotazione:', errore);

        this.annullamentoInCorso.set(null);

        this.messaggioAnnullamento.set({
          tipo: 'errore',
          testo: 'Non è stato possibile annullare la prenotazione. Riprova.',
        });
      },
    });
  }

  ngOnInit(): void {
    // Carica l'elenco delle esperienze da MockAPI
    this.esperienzeService.getEsperienzeAPI();

    // Carica le prenotazioni dell'utente
    this.ricaricaPrenotazioni();
  }
}
