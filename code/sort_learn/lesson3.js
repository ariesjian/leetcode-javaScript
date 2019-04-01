/*
* 最大间距
* 题号 164
* */
// export default (arr) => {
//   // 如果数组长度小于2返回0
//   if (arr.length < 2) {
//     return 0
//   }
//   // 排序
//   arr.sort()
//   // 用它来保存相邻元素的最大差值
//   let max = 0
//   for (let i = 0, len = arr.length - 1, tmp; i < len; i++) {
//     tmp = arr[i + 1] - arr[i]
//     if (tmp > max) {
//       max = tmp
//     }
//   }
//   return max
// }

export default (arr) => {
  if (arr.length < 2) {
    return 0
  }
  let max = 0
  let len = arr.length - 1
  let space
  for (let i = len, tmp; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      tmp = arr[j]
      if (tmp > arr[j + 1]) {
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
      }
    }
    if (i < len) {
      space = arr[i + 1] - arr[i]
      if (space > max) {
        max = space
      }
    }
  }
  return Math.max(max, arr[1] - arr[0])
}

// 第二种方法
const maximumGap = (nums) => {
    if (nums.length < 2) {
        return 0
    }
    nums.sort((a, b) => a - b)
    let newArr = [];
    for (let i = 0; i < nums.length - 1; i++) {
        const tmp = Math.abs(nums[i] - nums[i + 1]);
        newArr.push(tmp)
    }
    return newArr.sort((a, b) => b - a)[0]
};