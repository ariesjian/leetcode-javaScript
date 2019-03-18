import {cardCount, cardCountTwo} from '../../code/array_learn/lesson2';

test('cardCount:[2,2,3,3]', () => {
    expect(cardCount([2, 2, 3, 3])).toBe(true);
});
test('cardCountTwo:[1,1,1,2,2,2,3,3]', () => {
    expect(cardCountTwo([1, 1, 1, 2, 2, 2, 3, 3])).toBe(false)
});
test('cardCountTwo:[0,0,0,1,1,1,2,2,2]', () => {
    expect(cardCountTwo([0, 0, 0, 1, 1, 1, 2, 2, 2])).toBe(false)
});