/*
*  题号4  寻找两个有序数组的中位数
*  注意sort排序对于正数的排序ok  但是负数的排序是不正常的  所有排序需要自己写   const arr4 = arr3.sort((a, b) => {
        return a - b;
    });
* */
const middleFun = (nums1, nums2) => {
    const arr3 = [...nums1, ...nums2];// 合并数组
    const arr4 = arr3.sort((a, b) => {
        return a - b;
    });// 数组排序
    console.log(arr4, '000000------------', arr4.length);
    let m = 0;
    if (arr4.length <= 1) {
        m = arr4[0]
    } else {
        if ((arr4.length) % 2 === 0) { // 偶数个
            const middleIndex = ((arr4.length) / 2);
            m = (arr4[middleIndex] + arr4[middleIndex - 1]) / 2;
        } else { // 奇数个
            m = arr4[Math.floor((arr4.length) / 2)];
        }
    }
    return m
};