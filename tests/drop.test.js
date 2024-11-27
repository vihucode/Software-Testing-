import drop from '../src/drop.js';

describe('drop', () => {
    test('drops the first element by default', () => {
        expect(drop([1, 2, 3])).toEqual([2, 3]);
    });

    test('drops the first two elements', () => {
        expect(drop([1, 2, 3], 2)).toEqual([3]);
    });

    test('drops more elements than the array length', () => {
        expect(drop([1, 2, 3], 5)).toEqual([]);
    });

    test('drops zero elements', () => {
        expect(drop([1, 2, 3], 0)).toEqual([1, 2, 3]);
    });

    test('returns an empty array when input is null', () => {
        expect(drop(null)).toEqual([]);
    });

    test('returns an empty array when input is undefined', () => {
        expect(drop(undefined)).toEqual([]);
    });

    test('handles negative drop count', () => {
        expect(drop([1, 2, 3], -1)).toEqual([1, 2, 3]);
    });

    test('handles non-integer drop count', () => {
        expect(drop([1, 2, 3], 1.5)).toEqual([2, 3]);
    });

    test('handles empty array', () => {
        expect(drop([], 2)).toEqual([]);
    });
});