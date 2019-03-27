/*
* 正则表达式匹配  题号10
*   理解  字符串和模式的匹配
*   思路 遇到匹配的字符丢掉  继续往下匹配
*   todo  这个没有听懂
* */
export default (s, p) => { // s是字符串 p是模式
  let isMatch = (s, p) => {
    // 边界情况，如果s和p都为空，说明处理结束了，返回true，否则返回false
    if (p.length <= 0) { // 处理边界
      return !s.length
    }
    // 判断p模式字符串的第一个字符和s字符串的第一个字符是不是匹配
    let match = false;
    if (s.length > 0 && (p[0] === s[0] || p[0] === '.')) { // 当前模式和字符串的第一个字符匹配上了
      match = true
    }
    // p有模式的
    if (p.length > 1 && p[1] === '*') {
      // 第一种情况：s*匹配0个字符
      // 第二种情况：s*匹配1个字符，递归下去，用来表示s*匹配多个s
      return isMatch(s, p.slice(2)) || (match && isMatch(s.slice(1), p))
    } else {
      return match && isMatch(s.slice(1), p.slice(1))
    }
  }
  return isMatch(s, p)
}
