import { Component, inject, computed, signal } from '@angular/core';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
    FormsModule,
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

    if (!esperienza || !utente || this.prenotazioneInCorso()) {
      return;
    }

    const postiDaPrenotare = this.numeroPosti();

    if (postiDaPrenotare < 1 || postiDaPrenotare > esperienza.postiDisponibili) {
      return;
    }

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
      next: (risposta) => {
        console.log('Prenotazione salvata:', risposta);

        const nuoviPostiDisponibili = esperienza.postiDisponibili - postiDaPrenotare;

        this.esperienzeService
          .aggiornaPostiDisponibili(esperienza.id, nuoviPostiDisponibili)
          .subscribe({
            next: () => {
              this.prenotazioneInCorso.set(false);
              this.mostraModuloPrenotazione = false;
              this.numeroPosti.set(1);
            },
            error: (errore) => {
              console.error(
                'Prenotazione salvata, ma aggiornamento disponibilità fallito:',
                errore,
              );
              this.prenotazioneInCorso.set(false);
            },
          });
      },
      error: (errore) => {
        console.error('Errore prenotazione:', errore);
        this.prenotazioneInCorso.set(false);
      },
    });
  }
}
