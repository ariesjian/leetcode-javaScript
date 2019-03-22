/*
* 题号459  重复的子传
*  正则表达式在线测试工具 http://tool.chinaz.com/regex/
*  \1  匹配在此之前的模式多次 \w匹配字符  + 多次匹配 ^ 开始  $结束
* */

export default (str) => {
  const reg = /^(\w+)\1+$/
  return reg.test(str)
}
