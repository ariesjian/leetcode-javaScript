/*
*  题号30 串联所有单词的子串
*  思路 1，先找到所有可能的子串
*       2，排列组合
*       3，当前代码在LeetCode上是有问题的  因为无法提交到LeetCode上
*      todo  没有听懂这一章节 关于递归 第六章内容需要重新听一遍
* */

export default (str, words) => {
    // 保存结果
    let result = [];
    // 记录数组的长度，做边界条件计算
    let num = words.length;
    // 递归函数体
    let range = (r, _arr) => { // 上一步传入的值 ,_arr未处理的数组
        if (r.length === num) {
            result.push(r)
        } else {
            _arr.forEach((item, idx) => {
                let tmp = [].concat(_arr);// 先复制一份当前的数组 等到后来需要删掉当前元素
                tmp.splice(idx, 1);// 删除当前元素
                range(r.concat(item), tmp);// 递归当前结果
            })
        }
    };
    range([], words);
    // [0, 9, -1] filter 之后[0,9]

    return result.map(item => {
        return str.indexOf(item.join(''));// 返回当前数组的索引
    }).filter(item => item !== -1).sort();// 把没找到的下标过滤掉 查到的索引都是从小到大排序的
}