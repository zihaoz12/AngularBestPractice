import { Pipe, PipeTransform } from '@angular/core';

export const defaultValue = {
  limitNum: 30
};

@MyPipe({
  name: 'patrick'
})
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
      console.warn('LimitCharPipe input is not a string');
      return value;
    }
    if (value.length > limitNum) {
      return value.slice(0, limitNum) + '...';
    }
    return value;
  }
}

function MyPipe(config) {
  console.log(config);
  return pipe => {
    return pipe;
  };
}
