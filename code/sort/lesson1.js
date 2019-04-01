export default (arr) => {
    // 先排序  升序排序
    arr.sort((a, b) => a - b);
    let newArr = [];// 结果
    let oushu = 0;
    let jishu = 1;
    arr.forEach(item => {
        if (item % 2 === 1) { // 是奇数吗？
            newArr[jishu] = item; // 将奇数元素赋值给奇数项
            jishu += 2;
        } else { // 是偶数
            newArr[oushu] = item;
            oushu += 2
        }
    })
    return newArr;
}
