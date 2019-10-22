import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitChar'
})
export class LimitCharPipe implements PipeTransform {
  transform(value: string, limitNum, ...args: any[]): any {
    if (value.length > limitNum) {
      return value.slice(0, limitNum) + '...';
    }
    return value;
  }
}
