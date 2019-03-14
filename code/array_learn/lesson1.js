/*
*
* 题号 17
* 电话号码的组合
* 思路：
*      1，先找到数字对应的字符串
*      2，字符串两两匹配  然后再拿匹配后的值于后面的字符串匹配  依次类推
* 数组使用方法  https://blog.csdn.net/csethcrm/article/details/78727963
* str.split():字符串转数组
* arr.forEach:循环 这个方法没有返回值。参数都是function类型，默认有传参，function类型的参数分别为：遍历的数组内容；第对应的数组索引，数组本身。
* arr.map:循环 有返回  返回的是个数组
* for：数组循环
* arr.splice:很强大的数组方法，它有很多种用法，可以实现删除、插入和替换
* 删除：可以删除任意数量的项，只需指定 2 个参数：要删除的第一项的位置和要删除的项数。例如， splice(0,2)会删除数组中的前两项。
* 插入：可以向指定位置插入任意数量的项，只需提供 3 个参数：起始位置、 0（要删除的项数）和要插入的项。例如，splice(2,0,4,6)会从当前数组的位置 2 开始插入4和6。
*
* 替换：可以向指定位置插入任意数量的项，且同时删除任意数量的项，只需指定 3 个参数：起始位置、要删除的项数和要插入的任意数量的项。插入的项数不必与删除的项数相等。例如，splice (2,1,4,6)会删除当前数组位置 2 的项，然后再从位置 2 开始插入4和6。
* splice()方法始终都会返回一个数组，该数组中包含从原始数组中删除的项，如果没有删除任何项，则返回一个空数组。
*
* */
export const telePhoneCount = (str) => {
    // 对输入做处理，如果小于1返回空（LeetCode测试用例）
    if (str.length < 1) return [];
    // 建立映射关系 2-9的数组
    let map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    // 如果只给了一个按键，直接把按键内容取出来并按单个字符分组就可以了（LeetCode测试用例）
    if (str.length < 2) return map[str].split('');
    // 将输入的字符变成数组
    let num = str.split('');
    // 通过数字数组循环 将其内容作为指针传递给字符串数组  看是否有值 那么久将数字对应的字符串找到了  并且放到code数组里面
    let code = [];
    num.forEach(item => {
        if (map[item]) {
            code.push(map[item])
        }
    });
    // 逻辑部分
    let comb = (arr) => {
        // 临时变量用来保存前两个组合的结果
        let tmp = [];
        // 最外层的循环是遍历第一个元素，里层的循环是遍历第二个元素
        for (let i = 0; i < arr[0].length; i++) {
            for (let j = 0; j < arr[1].length; j++) {
                tmp.push(`${arr[0][i]}${arr[1][j]}`)// ${arr[0][i]}保存的是最外层取出来的第i个元素，${arr[1][j]}保存第一个元素的第j个字符
            }
        }
        // 前两项匹配之后就要删除前两项 并且用临时变量去替换掉之前的两个元素  并且再使用临时变量和后面的组合
        arr.splice(0, 2, tmp);
        if (arr.length > 1) { // 只要两个的时候才可以两两组合  如果只有一个的话 就返回临时组合
            // 递归
            comb(arr)
        } else {
            return tmp
        }
        return arr[0] // 函数体需要返回第一个元素  因为这个函数体最后的结果是一个数组  然后数组里面只包含一个数组 如 [[abcd,adce,adce,....]]
    };
    return comb(code)
};
// 第二种方法
export const letterCombinations = digits => {
    if (digits.length < 1) return []
    const map = {
        0: [],
        1: [],
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    };
    if (digits.length < 2) return map[digits];
    const arr = digits.split('').map(v => map[v]);
    let resArr = [];
    arr.reduce((a, b) => {
        a.forEach(aa => {
            b.forEach(bb => {
                resArr.push(`${aa}${bb}`);
            });
        });
        return resArr;
    });
    return resArr.filter(v => v.length === digits.length);
};