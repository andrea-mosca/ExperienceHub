export interface Esperienza {
  id: number;
  titolo: string;
  descrizione: string;
  categoria: string;
  prezzo: number;
  immagine: string;
  postiTotali: number;
  postiDisponibili: number;
  durata: number;
}

// private esperienze = signal<Esperienza[]>([
//     // CATEGORIA: CERAMICA E PITTURA
//     {
//       id: 1,
//       titolo: 'Workshop di ceramica',
//       descrizione:
//         'Scopri le tecniche della lavorazione dell’argilla e crea un oggetto unico con le tue mani.',
//       categoria: 'Ceramica',
//       prezzo: 40,
//       immagine:
//         'https://images.unsplash.com/photo-1609881583302-61548332039c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
//       postiTotali: 12,
//       postiDisponibili: 7,
//       durata: 120,
//     },
//     {
//       id: 2,
//       titolo: 'Pittura su ceramica',
//       descrizione:
//         'Decora una tazza o un piatto in ceramica utilizzando colori e tecniche decorative.',
//       categoria: 'Ceramica',
//       prezzo: 32,
//       immagine:
//         'https://images.unsplash.com/photo-1599958336382-c6a7c598925c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
//       postiTotali: 14,
//       postiDisponibili: 9,
//       durata: 90,
//     },
//     {
//       id: 3,
//       titolo: 'Tornio per principianti',
//       descrizione:
//         'Avvicinati alla lavorazione al tornio e impara a modellare l’argilla creando la tua prima ciotola.',
//       categoria: 'Ceramica',
//       prezzo: 55,
//       immagine:
//         'https://images.unsplash.com/photo-1703289631067-3df3353f4592?auto=format&fit=crop&w=800&q=80',
//       postiTotali: 6,
//       postiDisponibili: 2,
//       durata: 150,
//     },

//     // CATEGORIA: TREKKING E NATURA
//     {
//       id: 4,
//       titolo: 'Trekking notturno',
//       descrizione:
//         'Esplora sentieri immersi nella natura al calare del sole, accompagnato da una guida esperta.',
//       categoria: 'Natura',
//       prezzo: 35,
//       immagine:
//         'https://images.unsplash.com/photo-1773946734703-596612c4b0fc?auto=format&fit=crop&w=800&q=80',
//       postiTotali: 18,
//       postiDisponibili: 5,
//       durata: 240,
//     },
//     {
//       id: 5,
//       titolo: 'Escursione panoramica',
//       descrizione:
//         'Una giornata tra sentieri, panorami mozzafiato e paesaggi naturali da scoprire.',
//       categoria: 'Natura',
//       prezzo: 30,
//       immagine:
//         'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80',
//       postiTotali: 20,
//       postiDisponibili: 12,
//       durata: 300,
//     },
//     {
//       id: 6,
//       titolo: 'Camminata nel bosco',
//       descrizione:
//         'Un percorso guidato per conoscere la flora e la fauna del territorio e rilassarsi nella natura.',
//       categoria: 'Natura',
//       prezzo: 22,
//       immagine:
//         'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80',
//       postiTotali: 16,
//       postiDisponibili: 3,
//       durata: 120,
//     },

//     // CATEGORIA: CUCINA
//     {
//       id: 7,
//       titolo: 'Corso di cucina italiana',
//       descrizione: 'Impara a preparare alcuni piatti della tradizione italiana insieme a uno chef.',
//       categoria: 'Cucina',
//       prezzo: 65,
//       immagine:
//         'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
//       postiTotali: 10,
//       postiDisponibili: 4,
//       durata: 180,
//     },
//     {
//       id: 8,
//       titolo: 'Laboratorio di pasta fresca',
//       descrizione:
//         'Metti le mani in pasta e scopri i segreti della preparazione di ravioli, tagliatelle e altre specialità.',
//       categoria: 'Cucina',
//       prezzo: 50,
//       immagine:
//         'https://images.unsplash.com/photo-1556761223-4c4282c73f77?auto=format&fit=crop&w=800&q=80',
//       postiTotali: 8,
//       postiDisponibili: 2,
//       durata: 150,
//     },
//     {
//       id: 9,
//       titolo: 'Corso di pasticceria',
//       descrizione:
//         'Impara a realizzare dolci e dessert con tecniche di base e consigli da professionisti.',
//       categoria: 'Cucina',
//       prezzo: 55,
//       immagine:
//         'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=800&q=80',
//       postiTotali: 10,
//       postiDisponibili: 7,
//       durata: 180,
//     },

//     // CATEGORIA: DEGUSTAZIONI
//     {
//       id: 10,
//       titolo: 'Degustazione di vini',
//       descrizione:
//         'Scopri aromi, profumi e caratteristiche di una selezione di vini accompagnato da un sommelier.',
//       categoria: 'Degustazioni',
//       prezzo: 38,
//       immagine:
//         'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
//       postiTotali: 12,
//       postiDisponibili: 5,
//       durata: 120,
//     },
//     {
//       id: 11,
//       titolo: 'Degustazione di formaggi',
//       descrizione:
//         'Un percorso alla scoperta di formaggi artigianali e delle loro caratteristiche.',
//       categoria: 'Degustazioni',
//       prezzo: 28,
//       immagine:
//         'https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=800&q=80',
//       postiTotali: 14,
//       postiDisponibili: 10,
//       durata: 90,
//     },
//     {
//       id: 12,
//       titolo: 'Degustazione di olio extravergine',
//       descrizione:
//         'Impara a riconoscere le qualità di un olio extravergine attraverso una degustazione guidata.',
//       categoria: 'Degustazioni',
//       prezzo: 25,
//       immagine:
//         'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80',
//       postiTotali: 10,
//       postiDisponibili: 3,
//       durata: 75,
//     },

//     // CATEGORIA: WORKSHOP CREATIVI
//     {
//       id: 13,
//       titolo: 'Workshop di fotografia',
//       descrizione:
//         'Impara a utilizzare la macchina fotografica e a comporre immagini più efficaci.',
//       categoria: 'Creatività',
//       prezzo: 45,
//       immagine:
//         'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
//       postiTotali: 10,
//       postiDisponibili: 6,
//       durata: 180,
//     },
//     {
//       id: 14,
//       titolo: 'Creazione di candele artigianali',
//       descrizione: 'Realizza candele personalizzate scegliendo forme, profumazioni e decorazioni.',
//       categoria: 'Creatività',
//       prezzo: 35,
//       immagine:
//         'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80',
//       postiTotali: 8,
//       postiDisponibili: 1,
//       durata: 120,
//     },
//     {
//       id: 15,
//       titolo: 'Laboratorio di pittura',
//       descrizione:
//         'Sperimenta colori e tecniche pittoriche in un laboratorio creativo aperto a tutti.',
//       categoria: 'Creatività',
//       prezzo: 30,
//       immagine:
//         'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80',
//       postiTotali: 12,
//       postiDisponibili: 8,
//       durata: 120,
//     },

//     // CATEGORIA: EVENTI OUTDOOR
//     {
//       id: 16,
//       titolo: 'Escursione in kayak',
//       descrizione:
//         'Esplora le acque e i paesaggi del territorio con un’esperienza guidata in kayak.',
//       categoria: 'Outdoor',
//       prezzo: 50,
//       immagine:
//         'https://images.unsplash.com/photo-1588472235276-7638965471e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
//       postiTotali: 10,
//       postiDisponibili: 4,
//       durata: 180,
//     },
//     {
//       id: 17,
//       titolo: 'Picnic al tramonto',
//       descrizione:
//         'Condividi un momento rilassante all’aperto con un picnic immerso in un paesaggio suggestivo.',
//       categoria: 'Outdoor',
//       prezzo: 35,
//       immagine:
//         'https://images.unsplash.com/photo-1475483768296-6163e08872a1?auto=format&fit=crop&w=800&q=80',
//       postiTotali: 20,
//       postiDisponibili: 11,
//       durata: 120,
//     },
//     {
//       id: 18,
//       titolo: 'Yoga nel parco',
//       descrizione:
//         'Una sessione di yoga all’aperto per ritrovare equilibrio e benessere a contatto con la natura.',
//       categoria: 'Outdoor',
//       prezzo: 18,
//       immagine:
//         'https://images.unsplash.com/photo-1758274535230-3641d0632878?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
//       postiTotali: 15,
//       postiDisponibili: 6,
//       durata: 60,
//     },
//   ]);
