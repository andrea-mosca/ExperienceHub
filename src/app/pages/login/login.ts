import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutenticazioneService } from '../../services/autenticazione-service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private autenticazioneService = inject(AutenticazioneService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  nome: string = '';
  email: string = '';

  effettuaLogin(): void {
    this.autenticazioneService.accedi(this.nome, this.email);
    // destinazione di partenza
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
    // riportiamo l'utente alla destinazione iniziale prima del login,se non presente, ritorna alla Home
    this.router.navigateByUrl(returnUrl && returnUrl.startsWith('/') ? returnUrl : '/');
  }
}
