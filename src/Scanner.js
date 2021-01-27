// 导出 Scanner 类
export default class Scanner {
  constructor(templateStr) {
    // 获取到模板字符串
    this.templateStr = templateStr
    // 指定指针后面的尾巴 最开始就是模板字符串原文
    this.tail = templateStr;
    // 指定指针的启示位置为0
    this.pos = 0;
  }

  // scan 方法是路过指定位置 没有返回值
  scan(tag) {
    // 当尾巴的索引值0是花括号时
    if (this.tail.indexOf(tag) == 0) {
      // 让指针值加上 tag 的长度
      this.pos = this.pos + tag.length
      // 尾巴也要跟着改变
      this.tail = this.templateStr.substring(this.pos)
    }
  }

  // scanUtil 方法为让指针进行扫描至到遇见指定内容结束并且能返回之前找到的文字
  scanUtil(stopTag) {
    // 记录执行本方法时pos的值
    const pos_backup = this.pos

    // 当尾巴的索引值为0而不是花括号时 并且要保证 pos是小于模板字符串的长度
    while (this.tail.indexOf(stopTag) != 0 && this.eos()) {
      // 让指针加一
      this.pos++
      // 重新获取指针后面的尾巴 利用 substr 方法
      this.tail = this.templateStr.substring(this.pos)
    }
    // 返回指针前的文本
    return this.templateStr.substring(pos_backup, this.pos)
  }

  // eos 方法返回布尔值
  eos() {
    return this.pos < this.templateStr.length
  }
}