import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'get',
})
export class SelectPipe implements PipeTransform {
  public transform(obj: any, name: string = '') {
    if (obj && name !== '') {
      if (obj.get(name)) {
        return obj.get(name);
      }
    }
  }
}