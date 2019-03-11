/*
* 反转字符串 涉及的知识点
* String.split
* String.match
* Array.map
* Array.reverse  数组反转
* Array.join
*
* */

// // 反转字符串
// export const revertByWorld = (str) => {
//     const arr = str.split(' ');// 字符串转数组
//     const result = arr.map((i) => {
//         return i.split('').reverse().join('');
//         // 数组的每一项进行反转
//     });
//     return result.join(' ') // 将数组再转成字符串
// };

// 反转字符串 优化如下
export const revertByWorld = (str) => {
    return str.split(' ').map((i) => {
        return i.split('').reverse().join('')
    }).join(' ');
};
//  第二种方法 使用正则表达式
export const revertByWorldTwo = (str) => {
    return str.split(/\s/g).map((i) => {
        return i.split('').reverse().join('')
    }).join(' ');
};

// 第三种方法使用match:去识别  split是做分隔  w是识别单词  不是汉字的意思
export const revertByWorldThree = (str) => {
    return str.match(/[\w]+/g).map((i) => {
        return i.split('').reverse().join('')
    }).join(' ');
};


