import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'disponibilita',
})
export class DisponibilitaPipe implements PipeTransform {
  transform(postiDisponibili: number): string {
    if (postiDisponibili === 0) {
      return 'Posti esauriti';
    } else if (postiDisponibili === 1) {
      return 'Ultimo posto disponibile!';
    } else if (postiDisponibili <= 5) {
      return `Ultimi ${postiDisponibili} posti!`;
    } else {
      return `${postiDisponibili} posti disponibili`;
    }
  }
}
