/*
*  循环队列的学习
*  队列：队列是特殊的线性表 先进先出 就是在表的头部进行删除  在表的后面进行插入
*  题号：622
*  题目要求
*  MyCircularQueue(k): 构造器，设置队列长度为 k 。
*  Front: 从队首获取元素。如果队列为空，返回 -1 。
*  Rear: 获取队尾元素。如果队列为空，返回 -1 。
* enQueue(value): 向循环队列插入一个元素。如果成功插入则返回真。
* deQueue(): 从循环队列中删除一个元素。如果成功删除则返回真。
* isEmpty(): 检查循环队列是否为空。
* isFull(): 检查循环队列是否已满。
*  todo  这个代码在leetcode上跑不通  需要老师帮忙看看
* */
export default class MyCircularQueue {
    // 构造器，设置队列长度为 k 。
    constructor(k) {
        // 用来保存数据长度为k的数据结构
        this.list = Array(k);
        // 队首指针
        this.front = 0;
        // 队尾的指针
        this.rear = 0;
        // 队列的长度
        this.max = k
    }

// 向循环队列插入一个元素。如果成功插入则返回真。
    enQueue(num) {
        if (this.isFull() || this.list[this.rear]) { // 判断尾指针是不是满了
            return false
        } else {
            this.list[this.rear] = num;
            this.rear = (this.rear + 1) % this.max;// 循环队列  如果末尾插满了 那么尾指针要移动到队首
            return true
        }
    }

// 从循环队列中删除一个元素。如果成功删除则返回真。
    deQueue() {
        let v = this.list[this.front]; // 获取队首的元素
        this.list[this.front] = '';// 让队首的元素为空 删除该元素
        this.front = (this.front + 1) % this.max;// 不要忘记移动队首的指针
        return v ? v : false
    }

// 队列为空
    isEmpty() {
        if (!this.list[this.front] && !this.list[this.rear]) {
            return true
        } else {
            return false
        }
     // return this.front === this.rear && !this.list[this.front] // 队首指针元素等于队尾指针且对手元素为空
    }

// 队列未满
    isFull() {
        return this.front === this.rear && !!this.list[this.front] // 队首指针元素等于队尾指针且对手元素不为空
    }

// 从队首获取元素。如果队列为空，返回 -1 。
    Front() {
        let v = this.list[this.front]; // 获取队首的元素
        return v ? this.list[this.front] : -1
        // return this.list[this.front]
    }

// 获取队尾元素。如果队列为空，返回 -1 。
    Rear() {
        // let rear = this.rear - 1;
        // return this.list[rear < 0 ? this.max - 1 : rear]
      if(this.isEmpty()){
          return -1
      }else{
          return this.list[this.rear]
      }
    }
}
