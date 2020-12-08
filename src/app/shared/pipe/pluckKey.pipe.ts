import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pluckKey'
})
export class PluckKeyPipe implements PipeTransform {

  transform(items: Array<object>, key: string): unknown {
    return items
      .map(item => typeof item === 'object' && item[key]);
  }

}
