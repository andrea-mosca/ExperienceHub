import { Injectable, signal, computed, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Esperienza } from '../models/esperienza';

@Injectable({
  providedIn: 'root',
})
export class EsperienzeService {
  // Conserva privatamente l'elenco delle esperienze
  // Solo il Service può modificare questi dati
  private esperienzeSignal = signal<Esperienza[]>([]);

  // Rende disponibili i dati ai componenti in sola lettura
  // I componenti possono consultarli, ma non modificarli
  public esperienze = this.esperienzeSignal.asReadonly();

  private http = inject(HttpClient);
  private apiUrl = 'https://6af59c14f6270fa08d684c7e.mockapi.io/experiencehub/esperienze';
  caricamento = signal(true);
  errore = signal<string | null>(null);

  // recupero i dati dalla mock API
  getEsperienzeAPI(): void {
    // Se le esperienze sono già state caricate, evita una nuova richiesta
    if (this.esperienzeSignal().length > 0) {
      return;
    }
    this.caricamento.set(true);
    this.errore.set(null);

    this.http.get<Esperienza[]>(this.apiUrl).subscribe({
      next: (dati) => {
        // Salva i dati ricevuti nel Signal privato
        this.esperienzeSignal.set(dati);
        // Comunica che il caricamento è terminato
        this.caricamento.set(false);
      },
      error: (errore) => {
        console.error('Errore nel recupero delle esperienze:', errore);
        // Salva un messaggio di errore da mostrare eventualmente nel template
        this.errore.set('Impossibile caricare le esperienze.');
        this.caricamento.set(false);
      },
    });
  }
  // --signals--
  ricerca = signal('');
  categoriaSelezionata = signal('Tutte');
  ordinamentoPrezzo = signal('predefinito');
  ordinamentoDisponibilita = signal('predefinito');

  // computed signal per filtrare le esperienze
  esperienzeFiltrate = computed(() => {
    const testoRicerca = this.ricerca().toLowerCase();
    const categoria = this.categoriaSelezionata();
    const prezzo = this.ordinamentoPrezzo();
    const disponibilita = this.ordinamentoDisponibilita();

    let risultati = this.esperienze().filter((esperienza) => {
      const corrispondeRicerca = esperienza.titolo.toLowerCase().includes(testoRicerca);

      const corrispondeCategoria = categoria === 'Tutte' || esperienza.categoria === categoria;

      return corrispondeRicerca && corrispondeCategoria;
    });

    if (prezzo === 'crescente') {
      risultati.sort((a, b) => a.prezzo - b.prezzo);
    } else if (prezzo === 'decrescente') {
      risultati.sort((a, b) => b.prezzo - a.prezzo);
    }

    if (disponibilita === 'crescente') {
      risultati.sort((a, b) => a.postiDisponibili - b.postiDisponibili);
    } else if (disponibilita === 'decrescente') {
      risultati.sort((a, b) => b.postiDisponibili - a.postiDisponibili);
    }

    return risultati;
  });

  // resetto l'ordinamento precedente se il successivo viene attivato
  impostaOrdinamentoPrezzo(valore: string): void {
    this.ordinamentoPrezzo.set(valore);
    this.ordinamentoDisponibilita.set('predefinito');
  }
  impostaOrdinamentoDisponibilita(valore: string): void {
    this.ordinamentoDisponibilita.set(valore);
    this.ordinamentoPrezzo.set('predefinito');
  }
  // reset tutti i filtri impostati
  azzeraFiltri(): void {
    this.ricerca.set('');
    this.categoriaSelezionata.set('Tutte');
    this.ordinamentoPrezzo.set('predefinito');
    this.ordinamentoDisponibilita.set('predefinito');
  }

  // --metodi service--
  // getEsperienze(): Esperienza[] {
  //   return this.esperienzeSignal();
  // }
  // getEsperienzeInEvidenza(): Esperienza[] {
  //   return this.esperienzeSignal().filter((esperienza) => [1, 4, 10].includes(esperienza.id));
  // }
  // Restituisce automaticamente le esperienze in evidenza
  esperienzeInEvidenza = computed(() =>
    this.esperienze().filter((esperienza) => [1, 4, 10].includes(esperienza.id)),
  );
  // getEsperienzaById(id: number): Esperienza | undefined {
  //   return this.esperienzeSignal().find((esperienza) => esperienza.id === id);
  // }
  // Cerca un'esperienza tramite ID e restituisce un Signal reattivo
  getEsperienzaById(id: number) {
    return computed(() => this.esperienze().find((esperienza) => esperienza.id === id));
  }
}
