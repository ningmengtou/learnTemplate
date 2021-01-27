import lookUp from './lookUp.js'
import parseArray from './parseArray.js'
// renderTemplate 方法就是实现数据转变为dom字符串
export default function renderTemplate(tokens, data) {
  // 设置接收结果的变量
  let resultStr = ''
  // 遍历 tokens 
  for (let i = 0; i < tokens.length; i++) {
    let token = tokens[i];
    // 当 token[0] 为 text 把 token[1] 追加到结果中
    if (token[0] == 'text') {
      resultStr += token[1]
    } else if (token[0] == 'name') {
      // 当 token[0] 为 name 利用 lookUp 方法追加到结果中
      resultStr += lookUp(data, token[1])
    }else if (token[0] == '#') {
      resultStr += parseArray(token,data)
    }
  }
  return resultStr
}