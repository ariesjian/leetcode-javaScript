/*
     题号539   给给定一个 24 小时制（小时:分钟）的时间列表，找出列表中任意两个时间的最小时间差并已分钟数表示。
* 反转字符串 涉及的知识点
*
* */
export const stringL = (timePoints) => {
    const pointFormat = (point) => {
        let [hour, minute] = point.split(':');
        return (+hour) * 60 + (+minute)
    };
    let minutes = timePoints.map(pointFormat);
    minutes.sort((a, b) => (a - b));
    const len = minutes.length;
    let min = 24 * 60 - minutes[len - 1] + minutes[0];
    for (let i = 1; i < len; i++) {
        min = Math.min(minutes[i] - minutes[i - 1], min)
    }
    return min;
};
