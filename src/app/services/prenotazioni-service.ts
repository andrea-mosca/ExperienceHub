import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { Prenotazione } from '../models/prenotazione';

@Injectable({
  providedIn: 'root',
})
export class PrenotazioniService {
  private http = inject(HttpClient);

  private apiUrl = 'https://6af59c14f6270fa08d684c7e.mockapi.io/experiencehub/prenotazioni';

  // Signal con tutte le prenotazioni caricate
  private prenotazioniSignal = signal<Prenotazione[]>([]);
  prenotazioni = this.prenotazioniSignal.asReadonly();

  // Recupera le prenotazioni di un utente
  caricaPrenotazioni(email: string): void {
    this.http
      .get<Prenotazione[]>(`${this.apiUrl}?utenteEmail=${encodeURIComponent(email)}`)
      .subscribe({
        next: (prenotazioni) => {
          this.prenotazioniSignal.set(prenotazioni);
        },
        error: (errore) => {
          console.error('Errore nel recupero delle prenotazioni:', errore);
        },
      });
  }

  // Salva una nuova prenotazione
  creaPrenotazione(prenotazione: Omit<Prenotazione, 'id'>): Observable<Prenotazione> {
    return this.http.post<Prenotazione>(this.apiUrl, prenotazione).pipe(
      tap((nuovaPrenotazione) => {
        this.prenotazioniSignal.update((prenotazioni) => [...prenotazioni, nuovaPrenotazione]);
      }),
    );
  }
}
