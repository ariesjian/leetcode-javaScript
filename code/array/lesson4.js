export default (n) => {
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
}
