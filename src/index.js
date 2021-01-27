import templateToTokens from './templateToTokens.js'

import renderTemplate from './renderTemplate'
import lookUp from './lookUp.js'
// 全局指定一个变量LLtemplate
window.LLtemplate = {
  // 指定 render 方法
  render(templateStr, data) {
    // 调用 templateToTokens 来实现返回 tokens 
    let tokens = templateToTokens(templateStr)
    // 调用 renderTemplate 来实现tokens数组变成dom字符串
    return renderTemplate(tokens, data)
  }
    
}