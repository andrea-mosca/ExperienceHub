import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appDisponibilitaEsperienza]',
  host: {
    '[style.color]': 'colore',
  },
})
export class DisponibilitaEsperienza {
  @Input('appDisponibilitaEsperienza') postiDisponibili!: number;
  get colore(): string {
    if (this.postiDisponibili <= 0) {
      return 'red';
    } else if (this.postiDisponibili <= 5) {
      return 'orange';
    } else {
      return 'green';
    }
  }
}
