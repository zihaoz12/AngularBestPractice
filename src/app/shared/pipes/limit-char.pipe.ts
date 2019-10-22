import { Pipe, PipeTransform } from '@angular/core';

export const defaultValue = {
  limitNum: 30
};
@Pipe({
  name: 'limitChar'
})
export class LimitCharPipe implements PipeTransform {
  transform(
    value: string,
    limitNum = defaultValue.limitNum,
    ...args: any[]
  ): string {
    if (typeof value !== 'string') {
      console.error('the input value for LimitCharPipe is not a string');
      return value;
    }

    if (typeof limitNum !== 'number') {
      console.warn('the input limitNum for LimitCharPipe is not a number');
      return value;
    }

    if (value.length > limitNum) {
      return value.slice(0, limitNum) + '...';
    }
    return value;
  }
}
