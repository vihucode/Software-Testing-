import countBy from '../src/countBy.js';

describe('countBy', () => {
  test('counts by boolean property', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'betty', 'active': true },
      { 'user': 'fred', 'active': false }
    ];
    const result = countBy(users, value => value.active);
    expect(result).toEqual({ 'true': 2, 'false': 1 });
  });

  test('counts by string length', () => {
    const strings = ['one', 'two', 'three', 'four', 'five'];
    const result = countBy(strings, value => value.length);
    expect(result).toEqual({ '3': 2, '4': 2, '5': 1 });
  });

  test('counts by number parity', () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const result = countBy(numbers, value => value % 2 === 0 ? 'even' : 'odd');
    expect(result).toEqual({ 'odd': 3, 'even': 3 });
  });

  test('counts by first letter', () => {
    const words = ['apple', 'banana', 'apricot', 'blueberry', 'avocado'];
    const result = countBy(words, value => value[0]);
    expect(result).toEqual({ 'a': 3, 'b': 2 });
  });

  test('counts empty collection', () => {
    const result = countBy([], value => value);
    expect(result).toEqual({});
  });

  test('counts by undefined iteratee', () => {
    const result = countBy([1, 2, 3], value => undefined);
    expect(result).toEqual({ 'undefined': 3 });
  });
});