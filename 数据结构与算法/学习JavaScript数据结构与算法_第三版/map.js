function defaultToString(item) {
  if (item === null) {
    return 'NULL'
  } else if (item === undefined) {
    return 'UNDEFINED'
  } else if (typeof item === 'string' || item instanceof String) {
    return `${item}`
  } else {
    return item.toString()
  }
}

// set(key, value) 向字典中添加新元素，若key已存在，那么已存在的value会被新的值覆盖
// remove(key)     通过使用键值作为参数从字典中移除键值对应的数据值
// hasKey(key)     如果某个键值存在于该字典中，返回true，否则，返回false
// get(key)        通过以键值作为参数查找到特定的数值并返回
// clear()         删除该字典中的所有值
// size()          返回字典所包含值的数量
// isEmpty()       在size等于0的时候返回true，否则返回false
// keys()          将字典所包含的所有键名以数组形式返回
// values()        将字典所包含的所有数值以数组形式返回
// keyValues()     将字典中所有键值对返回
// forEach(cb)     迭代字典中所有的键值对，cb有两个参数，key和value，该方法可以在回调函数返回false时被终止


class Dictionary {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn
    this.table   = Object.create(null)
    this.count   = 0
  }

  hasKey(key) {
    return this.table[this.toStrFn(key)] !== null
  }

  set(key, value) {
    this.table[this.toStrFn(key)] = value
    if (!this.hasKey(key)) {
      this.count += 1
    }
  }

  remove(key) {
    if (this.hasKey(key)) {
      delete this.table[this.toStrFn(key)]
      this.count -= 1
      return true
    } else {
      return false
    }
  }

  get(key) {
    if (this.hasKey(key)) {
      return this.table[this.toStrFn(key)]
    } else {
      return undefined
    }
  }

  clear() {
    this.table = Object.create(null)
    this.count = 0
  }

  size() {
    return this.count
  }

  isEmpty() {
    return this.count === 0
  }

  keys() {
    return Object.keys(this.table)
  }
  values() {
    return Object.values(this.table)
  }

  keyValues() {
    const arr = []
    for (const [key, value] of this.table) {
      arr.push([key, value])
    }
    return arr
  }

  forEach(cb) {
    for (const [key, value] of this.table) {
      const result = cb(key, value)
      if (result === false) break
    }
  }
}