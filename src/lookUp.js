// lookUp 方法实现返回对象中点的值 dataObj 是对象 keyName 是点的类型
export default function lookUp(dataObj, keyName) {
  // 判断 keyName 中是否有 . 
  if ((keyName.indexOf('.') != -1) && (keyName != '.')) {
    // 有 . 则把 keyName 变成数组形式
    let keys = keyName.split('.')
    // 设定一个 temp 变量为 dataObj
    let temp = dataObj
    for (let i = 0; i < keys.length; i++) {
      // 循环 keys 让 temp的属性值为遍历 keys 的值
      // 一层一层找下去 直到遍历完 keys 
      temp = temp[keys[i]]
    }
    return temp
  }
  // 如果 keyName 中没有 . 
  return dataObj[keyName]
}