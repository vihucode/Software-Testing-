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
});