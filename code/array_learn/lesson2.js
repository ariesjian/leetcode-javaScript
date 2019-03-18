/*
*  题号914
*  思路 找到数组里面每个相同数的个数  如果每个相同的数的个数是一样的就满足了要求
*  知识点：
*  shift()：删除原数组第一项，并返回删除元素的值；如果数组为空则返回undefined 。
*  unshift:将参数添加到原数组开头，并返回数组的长度 。
*  这组方法和上面的push()和pop()方法正好对应，一个是操作数组的开头，一个是操作数组的结尾
* */
export const cardCount = (arr) => {
    // 修改排序的方式修改为直接统计每个相同字符的数量，思路不变（LeetCode测试用例）
    let countGroup = []; // 存储每张卡牌的次数
    let tmp = {};// 临时存储变量  键值对的键是输入的组数元素  比如1，2，3   值就算这个元素出现的次数
    arr.forEach(item => {
        tmp[item] = tmp[item] ? tmp[item] + 1 : 1
    });
    for (let v of Object.values(tmp)) {
        countGroup.push(v)
    }
// 此时 countGroup 已经存放的是每张牌的次数了（数组只遍历一遍，避免了排序和正则的耗时）
    // 求两个数的最大公约数
    const gcd = (a, b) => {
        if (b === 0) {
            return a
        } else {
            return gcd(b, a % b)
        }
    };
    while (countGroup.length > 1) {
        let a = countGroup.shift();
        let b = countGroup.shift();
        let v = gcd(a, b);
        if (v === 1) {
            return false
        } else {
            countGroup.unshift(v)
        }
    }
    return countGroup.length ? countGroup[0] > 1 : false
};

/*
*  题号914
*  思路 找到数组里面每个相同数的个数  如果每个相同的数的个数是2的倍数就满足了要求
*  知识点：
*  shift()：删除原数组第一项，并返回删除元素的值；如果数组为空则返回undefined 。
*  unshift:将参数添加到原数组开头，并返回数组的长度 。
*  这组方法和上面的push()和pop()方法正好对应，一个是操作数组的开头，一个是操作数组的结尾
* */
export const cardCountTwo = (arr) => {
    // 修改排序的方式修改为直接统计每个相同字符的数量，思路不变（LeetCode测试用例）
    let Group = []; // 存储每张卡牌的次数
    let tmp = {};// 临时存储变量  键值对的键是输入的组数元素  比如1，2，3   值就算这个元素出现的次数
    arr.forEach(item => {
        tmp[item] = tmp[item] ? tmp[item] + 1 : 1
    });
    for (let v of Object.values(tmp)) {
        Group.push(v)
    }
// 此时 Group 已经存放的是每张牌的次数了
    // 看看每一项是不是可以被2整除

    const arrJs = Group && Group.length > 1 && Group.sort().filter((x, index) => {
        return x % 2 !== 0;
    });
    return arrJs.length === 0
};