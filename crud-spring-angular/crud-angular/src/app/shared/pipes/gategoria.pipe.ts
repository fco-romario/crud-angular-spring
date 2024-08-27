import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'categoria',
    standalone: true
})
export class GategoriaPipe implements PipeTransform {

  transform(categoria: string): string {
    switch(categoria) {
      case 'front-end' : return 'code';
      case 'back-end' : return 'computer';
    }
    return 'code';
  }

}
