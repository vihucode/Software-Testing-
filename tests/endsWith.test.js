import endsWith from '../src/endsWith.js';

describe('endsWith', () => {
  test('should return true if string ends with target', () => {
    expect(endsWith('abc', 'c')).toBe(true);
  });

  test('should return false if string does not end with target', () => {
    expect(endsWith('abc', 'b')).toBe(false);
  });

  test('should return true if string ends with target at specified position', () => {
    expect(endsWith('abc', 'b', 2)).toBe(true);
  });

  test('should return true for empty target string', () => {
    expect(endsWith('abc', '')).toBe(true);
  });

  test('should return false for empty string and non-empty target', () => {
    expect(endsWith('', 'a')).toBe(false);
  });

  test('should return true for empty string and empty target', () => {
    expect(endsWith('', '')).toBe(true);
  });

  test('should handle position greater than string length', () => {
    expect(endsWith('abc', 'c', 5)).toBe(true);
  });

  test('should handle negative position', () => {
    expect(endsWith('abc', 'a', -1)).toBe(false);
  });
});