import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'durataEsperienza',
})
export class DurataEsperienzaPipe implements PipeTransform {
  transform(minuti: number): string {
    if (!minuti) return 'non disponibile';

    const ore = Math.floor(minuti / 60);
    const minutiRestanti = minuti % 60;

    if (ore === 0) {
      return `${minuti} min`;
    }

    if (minutiRestanti === 0) {
      return ore === 1 ? '1 ora' : `${ore} ore`;
    }

    return ore === 1 ? `1 ora e ${minutiRestanti} min` : `${ore} ore e ${minutiRestanti} min`;
  }
}
