import { Component, inject, computed, signal } from '@angular/core';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { NgClass } from '@angular/common';

import { EsperienzeService } from '../../services/esperienze-service';
import { AutenticazioneService } from '../../services/autenticazione-service';
import { PrenotazioniService } from '../../services/prenotazioni-service';

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
  private prenotazioniService = inject(PrenotazioniService);

  // Recupera l'ID dell'esperienza dall'URL
  private id = this.route.snapshot.paramMap.get('id') ?? '';
  // Recupera dal Service il Signal dell'esperienza richiesta
  esperienza = this.esperienzeService.getEsperienzaById(this.id);

  caricamento = this.esperienzeService.caricamento;
  errore = this.esperienzeService.errore;

  mostraModuloPrenotazione = false;
  prenotazioneInCorso = signal(false);
  prenotazioneSalvata = signal(false);

  messaggioPrenotazione = signal<{
    tipo: 'successo' | 'errore' | 'avviso';
    testo: string;
  } | null>(null);

  // numero di posti minimi prenotabili
  numeroPosti = signal(1);
  // calcolo prezzo della prenotazione
  prezzoTotale = computed(() => {
    const esperienza = this.esperienza();

    if (!esperienza) {
      return 0;
    }

    return esperienza.prezzo * this.numeroPosti();
  });

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

  confermaPrenotazione(): void {
    const esperienza = this.esperienza();
    const utente = this.autenticazioneService.utente();

    if (!esperienza || !utente || this.prenotazioneInCorso() || this.prenotazioneSalvata()) {
      return;
    }

    const postiDaPrenotare = this.numeroPosti();

    if (postiDaPrenotare < 1 || postiDaPrenotare > esperienza.postiDisponibili) {
      this.messaggioPrenotazione.set({
        tipo: 'avviso',
        testo: 'Il numero di posti selezionato non è disponibile.',
      });
      return;
    }

    this.messaggioPrenotazione.set(null);
    this.prenotazioneInCorso.set(true);

    const nuovaPrenotazione = {
      utenteEmail: utente.email,
      esperienzaId: esperienza.id,
      titoloEsperienza: esperienza.titolo,
      numeroPosti: postiDaPrenotare,
      dataPrenotazione: new Date().toISOString(),
      prezzoTotale: this.prezzoTotale(),
    };

    this.prenotazioniService.creaPrenotazione(nuovaPrenotazione).subscribe({
      next: () => {
        // La prenotazione è stata salvata su MockAPI
        this.prenotazioneSalvata.set(true);

        const nuoviPostiDisponibili = esperienza.postiDisponibili - postiDaPrenotare;

        this.esperienzeService
          .aggiornaPostiDisponibili(esperienza.id, nuoviPostiDisponibili)
          .subscribe({
            next: () => {
              this.prenotazioneSalvata.set(false);
              this.prenotazioneInCorso.set(false);
              this.mostraModuloPrenotazione = false;
              this.numeroPosti.set(1);

              this.messaggioPrenotazione.set({
                tipo: 'successo',
                testo: 'Prenotazione completata con successo! Ti aspettiamo.',
              });
            },
            error: (errore) => {
              console.error('Errore aggiornamento disponibilità:', errore);

              this.prenotazioneInCorso.set(false);
              this.mostraModuloPrenotazione = false;

              this.messaggioPrenotazione.set({
                tipo: 'errore',
                testo:
                  'La prenotazione è stata salvata, ma non è stato possibile aggiornare i posti disponibili. Contatta l’assistenza.',
              });
            },
          });
      },
      error: (errore) => {
        console.error('Errore prenotazione:', errore);

        this.prenotazioneInCorso.set(false);

        this.messaggioPrenotazione.set({
          tipo: 'errore',
          testo: 'Non è stato possibile completare la prenotazione. Riprova.',
        });
      },
    });
  }
}
