import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {
  transform(value: any, first: string, middle: string, last:string): any {
    return value + ' ' + first + ' ' + middle + ' ' + last;
  }
}
