import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Esperienza } from '../../models/esperienza';
import { CardEsperienza } from '../../components/card-esperienza/card-esperienza';
@Component({
  selector: 'app-home',
  imports: [RouterLink, CardEsperienza],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  esperienze: Esperienza[] = [
    {
      id: 1,
      titolo: 'Workshop di ceramica',
      descrizione: 'Scopri l’arte della ceramica e crea un oggetto tutto tuo.',
      categoria: 'Arte',
      prezzo: 35,
      immagine: 'https://placehold.co/600x400?text=Ceramica',
    },
    {
      id: 2,
      titolo: 'Corso di cucina italiana',
      descrizione: 'Impara a preparare piatti tradizionali insieme a uno chef.',
      categoria: 'Cucina',
      prezzo: 50,
      immagine: 'https://placehold.co/600x400?text=Cucina',
    },
    {
      id: 3,
      titolo: 'Trekking panoramico',
      descrizione: 'Esplora sentieri suggestivi e goditi una giornata all’aperto.',
      categoria: 'Natura',
      prezzo: 25,
      immagine: 'https://placehold.co/600x400?text=Trekking',
    },
  ];
}
