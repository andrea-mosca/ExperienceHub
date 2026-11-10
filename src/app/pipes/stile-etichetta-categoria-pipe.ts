import { Pipe, PipeTransform } from '@angular/core';

interface EtichettaCategoria {
  nome: string;
  emoji: string;
  classe: string;
}

@Pipe({
  name: 'stileEtichettaCategoria',
})
export class StileEtichettaCategoriaPipe implements PipeTransform {
  transform(categoria: string): EtichettaCategoria {
    switch (categoria.toLowerCase()) {
      case 'ceramica':
        return {
          nome: 'Ceramica',
          emoji: '🏺',
          classe: 'bg-warning-subtle text-dark',
        };

      case 'natura':
        return {
          nome: 'Natura',
          emoji: '🌿',
          classe: 'bg-success-subtle text-success-emphasis',
        };

      case 'cucina':
        return {
          nome: 'Cucina',
          emoji: '🍳',
          classe: 'bg-warning-subtle text-dark',
        };

      case 'degustazioni':
        return {
          nome: 'Degustazioni',
          emoji: '🍷',
          classe: 'bg-danger-subtle text-danger-emphasis',
        };

      case 'creatività':
        return {
          nome: 'Creatività',
          emoji: '🎨',
          classe: 'categoria-creativita',
        };

      case 'outdoor':
        return {
          nome: 'Outdoor',
          emoji: '🏕️',
          classe: 'bg-info-subtle text-info-emphasis',
        };

      default:
        return {
          nome: categoria,
          emoji: '✨',
          classe: 'bg-secondary-subtle text-secondary-emphasis',
        };
    }
  }
}
