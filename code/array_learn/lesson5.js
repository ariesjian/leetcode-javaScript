/*
*  题号1  两数之和
*  给定 nums = [2, 7, 11, 15], target = 9 因为 nums[0] + nums[1] = 2 + 7 = 9 所以返回 [0, 1]
*
* */
export const twoSum = (nums, target) => {
    // 两层循环
    let arr = [];
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                arr.push(i);
                arr.push(j);
            }
        }
    }
    return arr;
};