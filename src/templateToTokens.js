import Scanner from './Scanner.js';
import nestTokens from './nestTokens.js'
// templateToTokens 方法返回tokens
export default function templateToTokens(templateStr) {
  // 导入 Scanner 生成实例对象
  let scanner = new Scanner(templateStr);
  // 变量 words 接受文本内容
  let words = ''
  // 变量 tokens 
  let tokens = []
  while (scanner.eos()) {
    // 接收到左花括号之前的文本
    words = scanner.scanUtil("{{")
    // words 不为空就添加到tokens中
    if (words != '') {
      tokens.push(['text', words])
    }
    // 过度左花括号
    scanner.scan("{{")

    // 接收到右花括号之前的文本
    words = scanner.scanUtil("}}")
    // words 不为空就添加到tokens中
    if (words != '') {
      // 如果 words 的索引0为 # 
      if (words[0] == '#') {
        // 用 # 的方式存起来 值就是从索引1开始计算的文本
        tokens.push(['#', words.substring(1)])
      } else if (words[0] == '/') {
        // 用 / 的方式存起来 值就是从索引1开始计算的文本
        tokens.push(['/', words.substring(1)])
      } else {
        tokens.push(['name', words])
      }
    }
    // 过度右花括号
    scanner.scan("}}")
  }
  // 返回折叠的tokens
  return nestTokens(tokens)
} 