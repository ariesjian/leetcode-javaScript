import {revertByWorld,revertByWorldThree,revertByWorldTwo} from '../../code/string_learn/lesson1';
test('revertByWorld:你好啊 世界',()=>{
    expect(revertByWorld('你好啊 世界')).toBe('啊好你 界世')
});
test('revertByWorldTwo:你好啊 世界',()=>{
    expect(revertByWorldTwo('你好啊 世界')).toBe('啊好你 界世')
});
test('revertByWorldThree:hello world',()=>{
    expect(revertByWorldThree('hello world')).toBe('olleh dlrow')
});
