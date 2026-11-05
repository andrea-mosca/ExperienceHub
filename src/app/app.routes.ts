import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Esperienze } from './pages/esperienze/esperienze';
import { DettaglioEsperienza } from './pages/dettaglio-esperienza/dettaglio-esperienza';
import { Prenotazioni } from './pages/prenotazioni/prenotazioni';
import { Login } from './pages/login/login';
import { Profilo } from './pages/profilo/profilo';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'esperienze', component: Esperienze },
  { path: 'esperienza/:id', component: DettaglioEsperienza },
  { path: 'prenotazioni', component: Prenotazioni },
  { path: 'profilo', component: Profilo },
  { path: 'login', component: Login },
];
