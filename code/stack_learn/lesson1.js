/*
* 数据结构
* 1，栈 队列，链表，矩阵，二叉树，堆
* 2,栈的学习  概念 受限线性表 先进后出 可以在栈顶删除或者出入一个元素 类似于数组pop(),尾部删除；push()尾部添加
*
*  题号是： 682号 棒球比赛
* */

export default (arr) => {
    // 用数组来实现堆栈结构，pop,push
    let result = [];
    // 上一轮的数据
    let pre1;
    // 上上轮的数据
    let pre2;
    // 对数组进行遍历，遍历的目的是处理得分
    arr.forEach(item => {
        switch (item) {
            case 'C': // 表示您获得的最后一个有效回合的分数是无效的，应该被移除。
                if (result.length) {
                    result.pop()
                }
                break;
            case 'D': // 表示本轮获得的得分是前一轮有效回合得分的两倍。
                pre1 = result.pop();// 上一轮的数据
                result.push(pre1, pre1 * 2);// 需要把上一轮的数据放回去 然后在把本轮的数据放回去
                break;
            case '+': // 表示本轮获得的得分是前两轮有效 回合得分的总和。
                pre1 = result.pop();// 上轮数据
                pre2 = result.pop();// 上上轮数据
                result.push(pre2, pre1, pre2 + pre1); // 先把前两轮的数据放回去 先拿出来的要后放回去 后拿出来的要先放进去 然后把本轮的数据再放进去
                break;
            default:
                result.push(item * 1)// 将字符串变成数值再放进去
        }
    });
    return result.reduce((total, num) => { return total + num }) // reduce 数组累计求和并且返回一个值 total是遍历的和的临时存放值 num是当前遍历的值
}
