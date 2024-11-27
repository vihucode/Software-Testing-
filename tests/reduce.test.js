import reduce from '../src/reduce.js';

describe('reduce', () => {
  test('should sum up array values', () => {
    const result = reduce([1, 2, 3], (sum, n) => sum + n, 0);
    expect(result).toBe(6);
  });

  test('should handle object values', () => {
    const result = reduce({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {
      (result[value] || (result[value] = [])).push(key);
      return result;
    }, {});
    expect(result).toEqual({ '1': ['a', 'c'], '2': ['b'] });
  });

  test('should use first element as accumulator if not provided', () => {
    const result = reduce([1, 2, 3], (sum, n) => sum + n);
    expect(result).toBe(6);
  });

  test('should return undefined for empty array without accumulator', () => {
    const result = reduce([], (sum, n) => sum + n);
    expect(result).toBeUndefined();
  });

  test('should return initial accumulator for empty array', () => {
    const result = reduce([], (sum, n) => sum + n, 0);
    expect(result).toBe(0);
  });

  test('should handle string concatenation', () => {
    const result = reduce(['a', 'b', 'c'], (acc, val) => acc + val, '');
    expect(result).toBe('abc');
  });

  test('should handle nested objects', () => {
    const result = reduce({ 'a': { 'x': 1 }, 'b': { 'x': 2 } }, (acc, val) => acc + val.x, 0);
    expect(result).toBe(3);
  });
});