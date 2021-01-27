import lookUp from './lookUp.js'
import renderTemplate from './renderTemplate.js'
// parseArray 方法是处理内嵌数组 
// 参数是 token 而不是 tokens ! data 则是需要遍历的数组
export default function parseArray(token, data) {
  // 利用 lookUp 来处理data中我们需要的数组
  let value = lookUp(data, token[1])
  let resultStr = ''
  // 遍历我们处理过的数组数据
  for (let i = 0; i < value.length; i++) {
    // 调用 renderTemplate 来处理模板
    resultStr += renderTemplate(token[2], {
      ...value[i],
      '.':value[i]
    })
  }
  return resultStr
}