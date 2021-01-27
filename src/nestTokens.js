// nestTokens 方法可以折叠tokens
export default function nestTokens(tokens) {
  // 设定 nestedTokens 为需要返回的数组
  let nestedTokens = [];
  // 设定 collector 收集器指向 nestedTokens 数组
  // 当遇到 # 时 收集器会指向token索引为2的新数组
  let collector = nestedTokens;
  // 设定 sections 为栈结构 存放小tokens 栈顶的tokens数组中当前操作的就是tokens小数组
  let sections = [];

  for (let i = 0; i < tokens.length; i++) {
    // 取到当前的一个token 一个小数组
    let token = tokens[i]
    switch (token[0]) {
      case '#':
        // 在收集器中放入token
        collector.push(token)
        // 遇到 # 入栈
        sections.push(token)
        // 收集器执行token索引为2的项
        collector = token[2] = []
        break;
      case '/':
        // 遇到 / 出栈  pop() 会返回弹出的那一项
        sections.pop()
        // 栈结构中有值则收集器指向 栈结构最后面的项索引为2的数组
        // 栈结构中没有值则收集器指向 nestedTokens
        collector = sections.length > 0 ? sections[sections.length - 1][2] : nestedTokens
        break;
      default:
        // 默认就把 token 添加到 collector 中
        collector.push(token)
    }
  }

  return nestedTokens
}