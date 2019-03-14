import { telePhoneCount,letterCombinations } from '../../code/array_learn/lesson1';

test('telePhoneCount:23', () => {
    expect(telePhoneCount('23')).toEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']);
});
test('telePhoneCount:234', () => {
    expect(telePhoneCount('234')).toEqual([
        'adg', 'adh', 'adi',
        'aeg', 'aeh', 'aei',
        'afg', 'afh', 'afi',
        'bdg', 'bdh', 'bdi',
        'beg', 'beh', 'bei',
        'bfg', 'bfh', 'bfi',
        'cdg', 'cdh', 'cdi',
        'ceg', 'ceh', 'cei',
        'cfg', 'cfh', 'cfi'
    ])
});
test('letterCombinations:234', () => {
    expect(letterCombinations('234')).toEqual([
        'adg', 'adh', 'adi',
        'aeg', 'aeh', 'aei',
        'afg', 'afh', 'afi',
        'bdg', 'bdh', 'bdi',
        'beg', 'beh', 'bei',
        'bfg', 'bfh', 'bfi',
        'cdg', 'cdh', 'cdi',
        'ceg', 'ceh', 'cei',
        'cfg', 'cfh', 'cfi'
    ])
});