import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
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

  effettuaLogin(form: NgForm): void {
    const nome = this.nome.trim();
    const email = this.email.trim();

    // Verifichiamo che il form sia valido e che i campi non siano vuoti
    if (form.invalid || !nome || !email) {
      form.control.markAllAsTouched();
      return;
    }

    this.autenticazioneService.accedi(nome, email);

    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');

    this.router.navigateByUrl(returnUrl && returnUrl.startsWith('/') ? returnUrl : '/');
  }
}
