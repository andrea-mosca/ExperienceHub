import { Injectable, signal, computed } from '@angular/core';

import { Utente } from '../models/utente';

@Injectable({
  providedIn: 'root',
})
export class AutenticazioneService {
  private utenteSignal = signal<Utente | null>(null);

  utente = this.utenteSignal.asReadonly();

  // se utente() contiene un oggetto, isAuthenticated() restituisce true
  isAuthenticated = computed(() => this.utente() !== null);

  // metodo per l'autenticazione
  accedi(nome: string, email: string): void {
    const utente: Utente = {
      nome: nome,
      email: email,
    };
    this.utenteSignal.set(utente);

    // salviamo i dati in local storage
    localStorage.setItem('utente', JSON.stringify(utente));
  }

  esci(): void {
    this.utenteSignal.set(null);
    localStorage.removeItem('utente');
  }

  // verifichiamo alla creazione del servizio se in local storage è presente l'utente
  constructor() {
    const utenteSalvato = localStorage.getItem('utente');
    if (utenteSalvato) {
      try {
        this.utenteSignal.set(JSON.parse(utenteSalvato));
      } catch {
        localStorage.removeItem('utente');
      }
    }
  }
}
