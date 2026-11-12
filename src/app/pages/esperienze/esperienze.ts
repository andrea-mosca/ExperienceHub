import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CardEsperienza } from '../../components/card-esperienza/card-esperienza';
import { EsperienzeService } from '../../services/esperienze-service';

@Component({
  selector: 'app-esperienze',
  imports: [RouterLink, CardEsperienza],
  templateUrl: './esperienze.html',
  styleUrl: './esperienze.css',
})
export class Esperienze {
  private esperienzeService = inject(EsperienzeService);

  // Recupera dal Service gli stati di caricamento e di errore
  caricamento = this.esperienzeService.caricamento;
  errore = this.esperienzeService.errore;

  esperienzeFiltrate = this.esperienzeService.esperienzeFiltrate;

  ricerca = this.esperienzeService.ricerca;
  categoriaSelezionata = this.esperienzeService.categoriaSelezionata;
  ordinamentoPrezzo = this.esperienzeService.ordinamentoPrezzo;
  ordinamentoDisponibilita = this.esperienzeService.ordinamentoDisponibilita;

  impostaOrdinamentoPrezzo = (valore: 'predefinito' | 'crescente' | 'decrescente') => {
    this.esperienzeService.impostaOrdinamentoPrezzo(valore);
  };
  impostaOrdinamentoDisponibilita = (valore: 'predefinito' | 'crescente' | 'decrescente') => {
    this.esperienzeService.impostaOrdinamentoDisponibilita(valore);
  };

  azzeraFiltri(): void {
    this.esperienzeService.azzeraFiltri();
  }
}
