/*
* 数据结构
* 1，栈 队列，链表，矩阵，二叉树，堆
* 2,栈的学习  概念 受限线性表 先进后出 可以在栈顶删除或者出入一个元素 类似于数组pop(),尾部删除；push()尾部添加
*
*  题号是： 682号
* */

export default (arr) => {
    // 用数组来实现堆栈结构，pop,push
    let result = []
    // 上一轮的数据
    let pre1
    // 上上轮的数据
    let pre2
    // 对数组进行遍历，遍历的目的是处理得分
    arr.forEach(item => {
        switch (item) {
            case 'C':
                if (result.length) {
                    result.pop()
                }
                break
            case 'D':
                pre1 = result.pop()
                result.push(pre1, pre1 * 2)
                break
            case '+':
                pre1 = result.pop()
                pre2 = result.pop()
                result.push(pre2, pre1, pre2 + pre1)
                break
            default:
                result.push(item * 1)
        }
    })
    return result.reduce((total, num) => { return total + num })
}
