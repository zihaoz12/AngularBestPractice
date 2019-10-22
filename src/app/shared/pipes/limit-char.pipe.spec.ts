import { LimitCharPipe } from './limit-char.pipe';
import { defaultValue } from './limit-char.pipe';

describe('LimitCharPipe', () => {
  it('should create', () => {
    const limitCharPipe = new LimitCharPipe();
    expect(limitCharPipe).toBeTruthy();
  });

  it(`should transform the string that has more then limitNumber chars to the string...`, () => {
    const limitCharPipe = new LimitCharPipe();
    const inputString = 'abcdefgdsfdsfsdfsadfafdsafasfafafdsfasfafafdsfafds';
    const expectString = 'abcde...';
    const limitNumber = 5;
    expect(limitCharPipe.transform(inputString, limitNumber)).toBe(
      expectString
    );
  });

  it('should transform the string than has less then limitNumber chars to original one', () => {
    const limitCharPipe = new LimitCharPipe();
    const inputString = 'sdf';
    const expectString = inputString;
    const limitNumber = 20;
    expect(limitCharPipe.transform(inputString, limitNumber)).toBe(
      expectString
    );
  });

  it('should show warning if the inputString is not a string', () => {
    const limitCharPipe = new LimitCharPipe();
    const inputString = 'sdf';
    const expectString = inputString;
    const limitNumber = 20;
    expect(limitCharPipe.transform(inputString, limitNumber)).toBe(
      expectString
    );
  });
});
