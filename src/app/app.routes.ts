import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Esperienze } from './pages/esperienze/esperienze';
import { DettaglioEsperienza } from './pages/dettaglio-esperienza/dettaglio-esperienza';
import { Prenotazioni } from './pages/prenotazioni/prenotazioni';
import { Login } from './pages/login/login';
import { autenticazioneGuard } from './guards/autenticazione-guard';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'esperienze', component: Esperienze },
  { path: 'esperienza/:id', component: DettaglioEsperienza },
  { path: 'prenotazioni', component: Prenotazioni, canActivate: [autenticazioneGuard] },
  { path: 'login', component: Login },
];
