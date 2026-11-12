import { Component, signal, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { EsperienzeService } from './services/esperienze-service';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly title = signal('experience-hub');
  private esperienzeService = inject(EsperienzeService);
  ngOnInit(): void {
    this.esperienzeService.getEsperienzeAPI();
  }
}
