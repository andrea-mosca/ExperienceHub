# ExperienceHub

### Discover. Experience. Enjoy.

ExperienceHub è una web application dedicata alla scoperta e alla prenotazione di esperienze ricreative e formative.

La piattaforma permette agli utenti di esplorare un catalogo di attività, scoprire nuove passioni e prenotare esperienze uniche, tra cui workshop creativi, corsi di cucina, pittura su ceramica, trekking, degustazioni ed eventi outdoor.

L'obiettivo è offrire un'esperienza di navigazione semplice e intuitiva, consentendo agli utenti di individuare le attività di interesse, consultarne i dettagli e gestire le proprie prenotazioni attraverso un'unica piattaforma.

---

## Preview

ExperienceHub si propone di offrire un'interfaccia moderna, intuitiva e responsive, progettata per rendere la ricerca e la prenotazione delle esperienze semplici e accessibili.

L'applicazione sarà organizzata nelle seguenti sezioni principali:

- **Home:** presentazione della piattaforma e selezione di esperienze in evidenza.
- **Catalogo:** esplorazione delle esperienze disponibili.
- **Dettaglio esperienza:** informazioni complete sull'attività selezionata.
- **Prenotazioni:** gestione e consultazione delle prenotazioni effettuate.
- **Profilo utente:** gestione delle informazioni personali e dell'account.

---

## Funzionalità

### Esplorazione delle esperienze

Consultazione di un catalogo di attività con immagini, descrizioni, categorie, prezzi e informazioni utili.

### Ricerca e filtri

Ricerca delle esperienze attraverso parole chiave e filtri per categoria e altre caratteristiche dell'attività.

### Dettaglio esperienza

Visualizzazione delle informazioni complete relative a un'esperienza, tra cui descrizione, luogo, durata, prezzo e disponibilità.

### Prenotazione

Possibilità di selezionare un'esperienza, scegliere le informazioni necessarie e completare una prenotazione.

### Gestione delle prenotazioni

Consultazione dello storico delle attività prenotate e possibilità di cancellare una prenotazione.

### Autenticazione

Sistema di autenticazione simulata con funzionalità di login e logout.

### Profilo utente

Area personale dedicata alla gestione delle informazioni dell'utente e delle proprie attività.

---

## Tecnologie

Il progetto è sviluppato utilizzando Angular 21 e le principali tecnologie del frontend web.

| Tecnologia         | Utilizzo                                   |
| ------------------ | ------------------------------------------ |
| Angular 21         | Framework frontend                         |
| TypeScript         | Logica applicativa                         |
| HTML5              | Struttura dei template                     |
| CSS3               | Stili e personalizzazione dell'interfaccia |
| Bootstrap          | Layout responsive e componenti grafici     |
| Angular Router     | Navigazione tra le pagine                  |
| Angular Signals    | Gestione reattiva dello stato              |
| RxJS               | Gestione dei flussi asincroni              |
| Angular HttpClient | Comunicazione con API                      |
| Git e GitHub       | Versionamento del codice                   |

L'applicazione sarà realizzata privilegiando gli strumenti nativi di Angular e mantenendo al minimo le dipendenze esterne.

---

## Architettura

Il progetto segue un'organizzazione modulare basata su componenti, pagine, modelli, direttive, pipes e servizi applicativi.

```text
src/
└── app/
    ├── components/
    ├── directives/
    ├── models/
    ├── pages/
    ├── pipes/
    ├── services/
    ├── app.ts
    └── app.routes.ts
```

Le principali responsabilità sono suddivise in:

- **Components:** elementi riutilizzabili dell'interfaccia.
- **Pages:** pagine principali dell'applicazione.
- **Models:** definizione delle strutture dei dati.
- **Directives:** estensione del comportamento degli elementi HTML.
- **Pipes:** trasformazione e formattazione dei dati.
- **Services:** gestione della logica applicativa e dell'accesso ai dati.

---

## Installazione e avvio

Per eseguire ExperienceHub in locale è necessario avere installato Node.js e npm.

Clonare il repository:

```bash
git clone https://github.com/andrea-mosca/ExperienceHub.git
```

Accedere alla cartella del progetto:

```bash
cd ExperienceHub
```

Installare le dipendenze:

```bash
npm install
```

Avviare il server di sviluppo:

```bash
ng serve
```

Aprire il browser all'indirizzo:

```text
http://localhost:4200/
```

L'applicazione sarà disponibile in locale e verrà aggiornata automaticamente durante lo sviluppo.

---

## Repository

[ExperienceHub – GitHub](https://github.com/andrea-mosca/ExperienceHub)

---

## Autore

Andrea Moscatelli
