import { Component, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { AutenticazioneService } from '../../services/autenticazione-service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private autenticazioneService = inject(AutenticazioneService);
  private router = inject(Router);

  utente = this.autenticazioneService.utente;
  isAuthenticated = this.autenticazioneService.isAuthenticated;

  esci(): void {
    this.autenticazioneService.esci();
    this.router.navigateByUrl('/');
  }

  // sidebar
  sidebarAperta = false;
  apriSidebar(): void {
    this.sidebarAperta = true;
  }
  chiudiSidebar(): void {
    this.sidebarAperta = false;
  }
}
