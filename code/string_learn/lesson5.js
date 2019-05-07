/*
     题号 3  无重复字符的最长字子串
*
* */
export const  reverse = function(x) {
    const isSign = Math.sign(x); // 获取原始数字符号 正数 负数 还是 0
    const num = Math.abs(x); // 取绝对值

    const formatNum = num.toString().split("").reverse().join(""); // 绝对值 -> 字符串 -> 数组 -> 反转数组 -> 字符串
    const result = formatNum * isSign; // 添加正负号 如果是00034*1 就算34

    const start = Math.pow(2, 31) - 1; // 区域 右端点 返回2的31次幂 -1的值
    const end = -Math.pow(2, 31); // 区域 左端点

    if(result < start && result > end) {
        return result;
    }

    return 0;
};
