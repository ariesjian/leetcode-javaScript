/*
* 题号459  重复的子传
*
* */

export default (str) => {
  const reg = /^(\w+)\1+$/
  return reg.test(str)
}
