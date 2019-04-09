/*
*  选择排序：从第一个找到一个比当前小的值  如果遇到比自己小的值再进行换位置，如果没有遇到最小值就不换位置，
*  这样就会把最小值放到最左边   升序排序从小到大
* */
export default (arr) => {
    // 选择排序
    for (let i = 0, len = arr.length, min; i < len; i++) {
        min = arr[i];
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < min) {
                let c = min;
                min = arr[j];
                arr[j] = c
            }
        }
        arr[i] = min
    }
    return arr
}
const chooseSort = (arr) => {
    // min 永远存放的是最小值
    for (let i = 0, min; i < arr.length; i++) {
        min = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < min) {
                let t = min;
                min = arr[j];
                arr[j] = t;
            }
        }
        arr[i] = min
    }
    return arr
};
