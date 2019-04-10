/*
*  循环队列的学习
*  队列：队列是特殊的线性表 先进先出 就是在表的头部进行删除  在表的后面进行插入
*  题号：622
*  题目要求
*  MyCircularQueue(k): 构造器，设置队列长度为 k 。
*  Front: 从队首获取元素。如果队列为空，返回 -1 。
* Rear: 获取队尾元素。如果队列为空，返回 -1 。
* enQueue(value): 向循环队列插入一个元素。如果成功插入则返回真。
* deQueue(): 从循环队列中删除一个元素。如果成功删除则返回真。
* isEmpty(): 检查循环队列是否为空。
* isFull(): 检查循环队列是否已满。
* */
export default class MyCircularQueue {
    constructor (k) {
        // 用来保存数据长度为k的数据结构
        this.list = Array(k);
        // 队首指针
        this.front = 0;
        // 队尾的指针
        this.rear = 0;
        // 队列的长度
        this.max = k
    }

    enQueue (num) {
        if (this.isFull()) {
            return false
        } else {
            this.list[this.rear] = num;
            this.rear = (this.rear + 1) % this.max;
            return true
        }
    }

    deQueue () {
        let v = this.list[this.front];
        this.list[this.front] = '';
        this.front = (this.front + 1) % this.max;
        return v
    }

    isEmpty () {
        return this.front === this.rear && !this.list[this.front]
    }

    isFull () {
        return this.front === this.rear && !!this.list[this.front]
    }

    Front () {
        return this.list[this.front]
    }

    Rear () {
        let rear = this.rear - 1;
        return this.list[rear < 0 ? this.max - 1 : rear]
    }
}
