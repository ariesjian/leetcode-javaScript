/*
* 题号：85 最大矩形 给定一个仅包含 0 和 1 的二维二进制矩阵，找出只包含 1 的最大矩形，并返回其面积。
*   思路 1，找到所有的矩形  如何来描述矩形呢  下面描述
*     2，将二位矩阵重新定义  只关心1不关心0，并且记住连续1的起始和结束点
*     3，找到每两行之间的交集起始点 这样就可以找到所有的交叉矩形
*   数据结构 ：使用什么数据结构呢？
*   可以使用栈 将栈顶的两个求交集 然后再放到栈里面 然后再依次类推找到最后面的矩形交集
*   // todo 矩阵的代码在leetcode上跑不通
* */
export default (arr) => {
    let result = []; // 保存结果
    let reg = /1{2,}/g; // 至少两个1及其以上
    // 把二位数组重新表达，把相邻的1提取出来（起始点+截止点）
    arr = arr.map(item => {
        let str = item.join('');// 将这一项的数组变成字符串
        let r = reg.exec(str); // 使用正则表达式来提取 exec正则表达式匹配后拿到值和索引
        let rs = [];
        while (r) {
            rs.push([r.index, r.index + r[0].length - 1]);// 保留匹配到的起点和截止点
            r = reg.exec(str);// 然后进行下一次匹配
        }
        return rs
    })
    // 通过递归计算相邻的矩阵 弹出算结果 再放进去 这是一个递归的过程
    let maxRect = (arr, result, n = 1) => { // arr 二位矩阵 ，result上次的结果 n处理了几次也就是第几行
        // 弹出第一行
        let top = arr.pop();
        // 弹出第二行;
        let next = arr.pop();
        // 记录第一行的每一个起始点和截止点
        let tt;
        // 记录第二行的每一个起始点和截止点
        let nn;
        // 记录交叉的起始索引
        let start;
        // 记录交叉的截止索引
        let end;
        let width = 1;
        let maxWidth = 1;
        n++;
        for (let i = 0, il = top.length; i < il; i++) {
            tt = top[i];
            for (let j = 0, jl = next.length; j < jl; j++) {
                nn = next[j];
                width = Math.min(tt[1], nn[1]) - Math.max(tt[0], nn[0]);
                // 修改避免相邻两个数的差值为1（实际宽度为2）没有为start,end赋值导致的bug,应该加上=
                if (width >= maxWidth) {
                    maxWidth = width;
                    start = Math.max(tt[0], nn[0]);
                    end = Math.min(tt[1], nn[1])
                }
            }
        }
        // 如果没有找到交叉点
        if (start === undefined || end === undefined) {
            if (n < 3) {
                return false
            } else {
                width = top[0][1] - top[0][0] + 1;
                if (width > 1) {
                    result.push((n - 1) * width)
                }
            }
        } else {
            // 找到交叉点继续下一行
            if (arr.length > 0) {
                arr.push([
                    [start, end]
                ])
                maxRect(arr, result, n++)
            } else {
                // 从某一行一直计算到最后一行，这个时候start和end一直有值，所以不会进入到if层，这个时候n就是累计的行数（高），end-start+1就是宽
                result.push(n * (end - start + 1))
            }
        }
    }
    while (arr.length > 1) {
        maxRect([].concat(arr), result);
        arr.pop()
    }
    // 取最大值
    let max = 0;
    let item = result.pop();
    while (item) {
        if (item > max) {
            max = item
        }
        item = result.pop()
    }
    return max > 0 ? max : -1
}
