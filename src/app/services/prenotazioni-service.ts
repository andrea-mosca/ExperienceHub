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

  caricamento = signal(false);
  errore = signal<string | null>(null);

  // Recupera le prenotazioni di un utente
  caricaPrenotazioni(email: string): void {
    this.caricamento.set(true);
    this.errore.set(null);

    this.prenotazioniSignal.set([]);

    this.http.get<Prenotazione[]>(this.apiUrl).subscribe({
      next: (prenotazioni) => {
        const prenotazioniUtente = prenotazioni.filter(
          (prenotazione) => prenotazione.utenteEmail === email,
        );

        this.prenotazioniSignal.set(prenotazioniUtente);
        this.caricamento.set(false);
      },
      error: (errore) => {
        console.error('Errore nel recupero delle prenotazioni:', errore);
        this.errore.set('Impossibile caricare le prenotazioni. Riprova.');
        this.caricamento.set(false);
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

  // elimina una prenotazione
  eliminaPrenotazione(id: string): Observable<Prenotazione> {
    return this.http.delete<Prenotazione>(`${this.apiUrl}/${id}`).pipe(
      tap(() => {
        this.prenotazioniSignal.update((prenotazioni) =>
          prenotazioni.filter((prenotazione) => prenotazione.id !== id),
        );
      }),
    );
  }
}
