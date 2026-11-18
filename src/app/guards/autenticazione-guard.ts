import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { AutenticazioneService } from '../services/autenticazione-service';

export const autenticazioneGuard: CanActivateFn = (_route, state) => {
  const autenticazioneService = inject(AutenticazioneService);
  const router = inject(Router);

  // Se l'utente è autenticato, consentiamo l'accesso
  if (autenticazioneService.isAuthenticated()) {
    return true;
  }

  // Altrimenti lo reindirizziamo al Login
  return router.createUrlTree(['/login'], {
    queryParams: {
      returnUrl: state.url,
    },
  });
};
