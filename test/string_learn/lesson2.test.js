
import {countString} from '../../code/string_learn/lesson2'

test('countString(00110011)',()=>{
    expect(countString('00110011')).toEqual(['0011', '01', '1100', '10', '0011', '01'])
});

test('countString(10101)',()=>{
    expect(countString('10101')).toEqual(['10', '01', '10', '01'])
})