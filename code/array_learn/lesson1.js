/*
*
* 题号 17
* 电话号码的组合
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
    // 建立映射关系 2-9的数组
    let map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    // 将输入的字符变成数组
    let num = str.split('');
    //通过数字数组循环 将其内容作为指针传递给字符串数组  看是否有值 那么久将数字对应的字符串找到了  并且放到code数组里面
    let code = [];
    num.forEach(item => {
        if (map[item]) {
            code.push(map[item])
        }
    })
    let comb = (arr) => {
        // 临时变量用来保存前两个组合的结果
        let tmp = []
        // 最外层的循环是遍历第一个元素，里层的循环是遍历第二个元素
        for (let i = 0, il = arr[0].length; i < il; i++) {
            for (let j = 0, jl = arr[1].length; j < jl; j++) {
                tmp.push(`${arr[0][i]}${arr[1][j]}`)
            }
        }
        arr.splice(0, 2, tmp)
        if (arr.length > 1) {
            comb(arr)
        } else {
            return tmp
        }
        return arr[0]
    }


    return ''
}