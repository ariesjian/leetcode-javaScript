/*
*  排序  时间复杂度 O来表示  如果执行一次就是O(1) ;//  算的是运算的次数
*  空间复杂度  也是O来表示。如果是线性关系就是O(n+a);//  算的是运行内存
*  冒泡排序：就是小的上漂  大的下沉  每次找到最大值   就是升序排序 从小到大  不断的把最大值放到最右边去
* */

export default (arr) => {
    // 冒泡排序
    for (let i = arr.length - 1, tmp; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            tmp = arr[j]
            if (tmp > arr[j + 1]) {
                arr[j] = arr[j + 1]
                arr[j + 1] = tmp
            }
        }
    }
    return arr
}
const sortFun = (arr) => {
    for (let i = arr.length - 1, tmp; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            tmp = arr[j];
            if (tmp > arr[j + 1]) {
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp
            }
        }
    }
    return arr
}