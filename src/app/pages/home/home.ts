import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Esperienza } from '../../models/esperienza';
import { CardEsperienza } from '../../components/card-esperienza/card-esperienza';
import { EsperienzeService } from '../../services/esperienze-service';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CardEsperienza],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  private esperienzaService = inject(EsperienzeService);
  esperienze: Esperienza[] = [];

  ngOnInit(): void {
    this.esperienze = this.esperienzaService.getEsperienzeInEvidenza();
  }
}
