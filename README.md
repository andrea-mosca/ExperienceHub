# ExperienceHub

**ExperienceHub** è una web application per scoprire e prenotare esperienze ricreative e formative. Il progetto permette di consultare un catalogo di attività, cercare e filtrare le proposte, verificarne la disponibilità, effettuare prenotazioni e gestire le proprie prenotazioni.

> Progetto realizzato a scopo formativo e per portfolio, con Angular 21.

## Indice

- [Descrizione del progetto](#descrizione-del-progetto)
- [Richieste iniziali e obiettivi](#richieste-iniziali-e-obiettivi)
- [Funzionalità implementate](#funzionalità-implementate)
- [Tecnologie utilizzate](#tecnologie-utilizzate)
- [Struttura del progetto](#struttura-del-progetto)
- [Installazione e avvio](#installazione-e-avvio)
- [Integrazione API e gestione dei dati](#integrazione-api-e-gestione-dei-dati)
- [Limiti della demo](#limiti-della-demo)
- [Autore](#autore)

## Descrizione del progetto

ExperienceHub è pensato per raccogliere in un unico spazio esperienze come:

- Pittura e workshop di ceramica.
- Trekking ed escursioni.
- Corsi di cucina.
- Degustazioni.
- Workshop creativi.
- Attività ed eventi outdoor.

L'utente può esplorare le attività disponibili, consultarne la scheda di dettaglio e prenotare uno o più posti. Dalla propria area account può consultare le prenotazioni effettuate e annullarle.

## Richieste iniziali e obiettivi

Il progetto nasce da una specifica applicativa con obiettivi funzionali e tecnici, organizzata in un percorso di sviluppo di **72 ore**, suddiviso in quattro settimane.

### Obiettivi funzionali richiesti

1. Consultazione del catalogo delle esperienze.
2. Ricerca e applicazione di filtri.
3. Visualizzazione del dettaglio di una singola esperienza.
4. Verifica della disponibilità dei posti.
5. Prenotazione delle esperienze.
6. Consultazione dello storico delle prenotazioni.
7. Cancellazione delle prenotazioni.
8. Autenticazione simulata e gestione del profilo utente.

### Obiettivi tecnici richiesti

- Componenti personalizzati.
- Direttive personalizzate.
- Pipe personalizzate.
- Signals per la gestione reattiva dello stato.
- Servizi applicativi.
- Integrazione HTTP.
- Utilizzo di RxJS e degli Observable.
- Dipendenze esterne mantenute al minimo.

## Funzionalità implementate

### Catalogo e ricerca

- Visualizzazione delle esperienze disponibili.
- Ricerca per titolo.
- Filtro per categoria.
- Ordinamento per prezzo crescente e decrescente.
- Ordinamento per disponibilità crescente e decrescente.
- Reset dei filtri.
- Sezione Home con esperienze in evidenza.

### Dettaglio e prenotazione

- Pagina di dettaglio con descrizione, categoria, durata, prezzo e disponibilità.
- Visualizzazione dello stato dei posti disponibili.
- Pulsante di prenotazione disabilitato quando l'esperienza è esaurita.
- Selezione del numero di posti e calcolo automatico del prezzo totale.
- Accesso al flusso di prenotazione dopo il login simulato.
- Salvataggio della prenotazione e aggiornamento dei posti disponibili.
- Messaggi di conferma, errore e avviso.

### Account e prenotazioni

- Login simulato tramite nome ed email.
- Validazione dei campi obbligatori e del formato email.
- Persistenza della sessione simulata tramite `localStorage`.
- Sidebar account con dati dell'utente e logout.
- Protezione della rotta `/prenotazioni` tramite una Functional Route Guard.
- Reindirizzamento al login e ritorno alla pagina richiesta dopo l'accesso.
- Visualizzazione delle prenotazioni dell'utente.
- Annullamento di una prenotazione.
- Ripristino dei posti disponibili dopo l'annullamento.
- Gestione degli stati di caricamento, errore e lista vuota.

### Interfaccia

- Layout responsive realizzato con Bootstrap.
- Header con navigazione desktop e menu mobile.
- Footer con collegamenti ai profili GitHub e LinkedIn.
- Pulsante per tornare all'inizio della pagina.
- Card riutilizzabili per la presentazione delle esperienze.

## Tecnologie utilizzate

| Tecnologia             | Utilizzo                                                                  |
| ---------------------- | ------------------------------------------------------------------------- |
| **Angular 21**         | Framework dell'applicazione e componenti standalone.                      |
| **TypeScript**         | Linguaggio di sviluppo e tipizzazione dei dati.                           |
| **Angular Signals**    | Gestione reattiva dello stato e dei dati visualizzati.                    |
| **Angular Router**     | Routing, navigazione e protezione delle rotte.                            |
| **Angular HttpClient** | Comunicazione HTTP con l'API.                                             |
| **RxJS**               | Gestione degli Observable e delle operazioni asincrone.                   |
| **Bootstrap 5**        | Layout, griglia responsive e componenti grafici.                          |
| **Bootstrap Icons**    | Icone dell'interfaccia.                                                   |
| **MockAPI**            | API esterna per la persistenza dimostrativa di esperienze e prenotazioni. |

## Struttura del progetto

La logica applicativa è organizzata principalmente all'interno di `src/app`:

```text
src/
└── app/
    ├── components/
    │   ├── card-esperienza/
    │   ├── footer/
    │   └── header/
    ├── directives/
    ├── guards/
    ├── models/
    ├── pages/
    │   ├── dettaglio-esperienza/
    │   ├── esperienze/
    │   ├── home/
    │   ├── login/
    │   └── prenotazioni/
    ├── pipes/
    ├── services/
    ├── app.config.ts
    └── app.routes.ts
```

### Esempi di elementi Angular personalizzati

**Componenti riutilizzabili**

- `Header`: navigazione e accesso all'area account.
- `Footer`: navigazione secondaria e collegamenti esterni.
- `CardEsperienza`: presentazione di una singola esperienza.

**Direttive**

- `CardEffect`: applica un effetto hover alle card.
- `DisponibilitaEsperienza`: applica uno stile in base ai posti disponibili.

**Pipe**

- `DisponibilitaPipe`: trasforma il numero di posti in un'etichetta descrittiva.
- `DurataEsperienzaPipe`: formatta la durata in ore e minuti.
- `StileEtichettaCategoriaPipe`: associa categoria, emoji e classi grafiche.

**Servizi**

- `EsperienzeService`: recupero, filtraggio e aggiornamento delle esperienze.
- `PrenotazioniService`: caricamento, creazione ed eliminazione delle prenotazioni.
- `AutenticazioneService`: gestione dell'accesso simulato e dei dati dell'utente.

## Installazione e avvio

### Requisiti

- Node.js e npm.
- Angular CLI 21 (oppure utilizzo della CLI locale tramite `npx`).

### Clonare il repository

```bash
git clone https://github.com/andrea-mosca/ExperienceHub.git
cd ExperienceHub
```

### Installare le dipendenze

```bash
npm install
```

### Avviare il server di sviluppo

```bash
ng serve
```

In alternativa:

```bash
npx ng serve
```

Aprire `http://localhost:4200/` nel browser. L'applicazione si aggiorna automaticamente quando vengono salvate modifiche ai file sorgente.

### Generare la build di produzione

```bash
ng build
```

I file compilati vengono generati nella cartella `dist/`.

## Integrazione API e gestione dei dati

L'applicazione utilizza MockAPI come servizio REST esterno. Le risorse impiegate sono:

- `esperienze`: catalogo e disponibilità delle esperienze.
- `prenotazioni`: prenotazioni create dagli utenti.

Le richieste HTTP sono incapsulate nei servizi Angular. I componenti leggono lo stato esposto dai servizi tramite Signals; le operazioni asincrone utilizzano Observable e operatori RxJS.

Per utilizzare una propria istanza MockAPI, occorre creare le risorse necessarie e aggiornare gli URL API configurati nei servizi `EsperienzeService` e `PrenotazioniService`.

## Limiti della demo

ExperienceHub è un progetto dimostrativo, non un sistema di prenotazione pronto per l'utilizzo in produzione.

- **Autenticazione simulata:** l'accesso richiede nome ed email, ma non prevede password, verifica dell'identità o autenticazione gestita da un backend.
- **Dati utente nel browser:** la sessione simulata viene conservata in `localStorage`; non costituisce un meccanismo di sicurezza.
- **Filtro delle prenotazioni:** la selezione delle prenotazioni per utente avviene nel frontend. Non va considerata un'autorizzazione o una protezione dei dati lato server.
- **Concorrenza:** non sono implementati meccanismi transazionali o di blocco per gestire prenotazioni simultanee dello stesso ultimo posto.
- **Pagamenti:** il progetto non gestisce pagamenti reali.

Questi limiti sono coerenti con lo scopo didattico e con l'utilizzo di un'API mock.

## Autore

**Andrea Moscatelli**

- [GitHub](https://github.com/andrea-mosca)
- [LinkedIn](https://www.linkedin.com/in/andreamoscatelli)

---

_ExperienceHub — progetto formativo sviluppato con Angular 21._
