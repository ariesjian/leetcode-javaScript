/*
* 算法的本质就是通过现象找到规律 并且总结实现出来
*
* 如何找到规律 ： 就是输入和输出之间的规律
*  实现是程序是数据结构的结合体
*   程序是：if  else   switch   递归等结合使用
*解析题目：
*  输入是 ：00110011  输出是：6
*  有6个子串具有相同数量的连续1和0：“0011”，“01”，“1100”，“10”，“0011”和“01”。
*  把结果往输入里面套  找规律 ：
*      这个可以画图找规律 会发现字符串从左往右 每找到一位输出  下一次就会从下一个字符开始找起  每次往下移动一个字符，
*      前面的一位字符不要了 此时我们把新的输入叫做子输入(就是不停的减少输入)需要用到递归  就是重复找子串的过程
*
* 字符串用法  https://www.cnblogs.com/YYvam1288/p/6973252.html
* String.repeat(count)：字符串复制指定次数
* String.match(RegExp)：正则匹配
* String.slice(start,end):截取是字符串
* arr.push
*
* 正则表达式  匹配  比较  动态正则表达式校验的声明
* */

export const countString = (str) => {
    // 建立堆栈
    let r = [];
    // 给定任意子输入都返回第一个符合条件的子串
    const match = (str) => {
        const j = str.match(/^(0+|1+)/)[0];  // 从字符串的起步找到连续的0或者1  比如00 或者 11 或者是 1 或者0
        //  j[0] ^ 1 是0和1 相互取反 ^是取反的意思  repeat(j.length)找到j.length倍长度的 并且返回
        let o = (j[0] ^ 1).toString().repeat(j.length);
        let reg = new RegExp(`^(${j}${o})`); // 声明正则对象 这样可以生成一个动态的正则表达式验证
        if (reg.test(str)) {
            return RegExp.$1  // 返回正则的结果
        } else {
            return ''
        }
    }
    // 通过for循环控制程序的运行流程 找子串  字符串
    for (let i = 0; i < str.length - 1; i++) {
        let sub = match(str.slice(i));// 找子串、slice截取字符串
        if (sub) {
            r.push(sub)
        }
    }

    return r
};





























