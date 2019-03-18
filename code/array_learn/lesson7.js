/*
*  题号11  盛最多水的容器
* */
export const maxArea = function (h) {
    // 求所有积的最大值  两层数组循环
    // let arrJi=[];// 两层数组的成绩
    // for(let i=0;i<arr.length-1;i++){
    //     for(let j=i+1;j<arr.length;j++){
    //         arr.slice(i+1);
    //         const min=arr[i]>=arr[j]?arr[j]:arr[i]; // 找到两个纵坐标的最小值
    //         const ji=(j-i)*min;
    //         if(arrJi.indexOf(ji)===-1){
    //              arrJi.push(ji);
    //         }
    //     }
    // }
    // return Math.max(...arrJi)
    return Math.max(...h.map((n, i) => Math.max(...h.slice(i + 1).map((m, j) => (j + 1) * Math.min(m, n)))));
};
