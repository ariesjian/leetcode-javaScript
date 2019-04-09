/*
* 缺失的第一个正数
* 题号：41
* 思路：
*  1，先过滤掉非正整数 如果是空就返回1
*  2，  然后排序，升序排序 从最小值来找起 如果最小值大于1  就返回1
*  3，  排序后最小值是1 就需要循环找到最小的缺失的那个值 看相邻的数据是不是相邻
*  优化：
*  可以不使用排序  可以使用选择排序来找最小值 第一轮遍历找的就是最小值  冒泡排序找的是最大值 第一遍找的就是最大值  因为排序很消耗性能
*
* */

// 第一种方法
const funOne = (arr) => {
    // 过滤掉非正整数
    arr = arr.filter(item => item > 0);
    // 正整数数组是不是为空
    if (arr.length) {
        // 升序，目的：方便从左到右取最小值arr[0]
        arr.sort((a, b) => a - b);
        // 如果第一个元素不为1，返回1
        if (arr[0] !== 1) { // 如果最小值不是1就返回1
            return 1
        } else {
            // 从左边开始遍历，只要下一个元素和当前元素差值》1说明当前元素的下一个值（+1）
            for (let i = 0, len = arr.length - 1; i < len; i++) {
                if (arr[i + 1] - arr[i] > 1) { // 看连个数值是不是相邻  如果不相邻 就返回这个值的下一个正数
                    return arr[i] + 1
                }
            }
            // 如果数组是连续的正整数【1,2,3,4,5,6】
            return arr.pop() + 1 // pop()删除数组的最后一个元素，并返回这个元素。
        }
    } else { // 说明都不是正整数  然后也返回1
        return 1
    }
};
// 这个是优化性能  不需要真正的排序
export default (arr) => {
    arr = arr.filter(item => item > 0)
    // 实现选择排序，先拿到最小值，如果第一个元素不是1直接返回1，如果是1，就要比相邻元素差值
    for (let i = 0, len = arr.length, min; i < len; i++) {
        min = arr[i];// 找到最小值
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < min) {
                let c = min;
                min = arr[j];
                arr[j] = c
            }
        }
        arr[i] = min;// 这里要记录下最小值
        if (i > 0) { // 遍历第二轮 这个时候就可以进行差值计算了 如果最小值的下标不是第一个  就往前找一位加1
            if (arr[i] - arr[i - 1] > 1) {
                return arr[i - 1] + 1
            }
        } else { // 遍历了一次 只能拿到最小值  所以拿最小值和1做比较
            if (min !== 1) {
                return 1
            }
        }
    }
    return arr.length ? arr.pop() + 1 : 1
}
