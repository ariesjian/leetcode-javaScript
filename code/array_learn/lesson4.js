/*
* 题号89   格蕾编码
*  找规律  如果输入的是0  就算2的0次方  就算其输出的序列  如果是1 就算2的1次方 2就算2的2次方  3就是2的3次方 等等
*
* 视频提到的规律：就算前一个的值作为接着的下一个的低位 并且在前面加0，然后再对称到后面，然后在高位前面加1
*  知识点  求幂
*  Math.pow(x,y)  x是底数 就是2  y 是幂 就算传入的n
* */
export const geliFun = (n) => {
    // 递归函数，用来算输入为n的格雷编码序列
    let make = (n) => {
        if (n === 1) { // 1单独处理
            return ['0', '1']
        } else {
            let prev = make(n - 1); // 拿到n-1之前的输出 为了找对称低位值
            let result = [];
            let max = Math.pow(2, n) - 1; // 为了找对称线  -1是为了找到下标  长度-1就是下标
            for (let i = 0, len = prev.length; i < len; i++) { //  不需要关注顺序
                result[i] = `0${prev[i]}`; // 将低位前面加0
                result[max - i] = `1${prev[i]}`; // 将高位前面加1
            }
            return result
        }
    };
    return make(n)
};

