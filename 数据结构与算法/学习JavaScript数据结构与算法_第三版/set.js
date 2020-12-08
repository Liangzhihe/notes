// 实现一些方法
// add(element)    向集合添加一个新元素
// delete(element) 从集合移除一个元素
// has(element)    判断元素是否在集合中，返回布尔值
// clear()         移除集合中所有元素
// size()          返回集合中元素的个数
// values()        返回一个包含集合中所有元素的数组

// union(otherSet)        并集
// intersection(otherSet) 交集
// difference(otherSet)   差集
// isSubsetOf(otherSet)   子集

class Set {
  constructor() {
    this.items = {}
    this.count = 0
  }

  has(element) {
    return Object.prototype.hasOwnProperty.call(this.items, element)
  }

  add(element) {
    if (this.has(element)) {
      return false
    } else {
      this.items[element] = element
      this.count += 1
    }
  }

  delete(element) {
    if (this.has(element)) {
      delete this.items[element]
      this.count -= 1
      return true
    } else {
      return false
    }
  }


  clear() {
    this.items = {}
    this.count = 0
  }

  size() {
    return this.count
  }

  values() {
    const arr = []
    for ( let item in this.items) {
      if (this.items.hasOwnProperty(item)) {
        arr.push(item)
      }
    }
    return arr
  }

  union(otherSet) {
    const unionSet = new Set()
    this.values().forEach(item => unionSet.add(item))
    otherSet.values().forEach(item => unionSet.add(item))
    return unionSet
  }

  intersection(otherSet) {
    const intersectionSet = new Set()
    otherSet.values().forEach(item => {
      if (this.has(item)) {
        intersectionSet.add(item)
      }
    })
    return intersectionSet
  }

  difference(otherSet) {
    const differenceSet = new Set()
    this.values().forEach(item => {
      if (!otherSet.has(item)) {
        differenceSet.add(item)
      }
    })
    return differenceSet
  }

  isSubsetOf(otherSet) {
    return this.values().every(item => otherSet.has(item))
  }
}


const setA = new Set()
const setB = new Set()

setA.add(1)
setA.add(2)
setA.add(3)
setA.add(5)

setB.add(1)
setB.add(2)
setB.add(3)
setB.add(4)

console.log(setA.union(setB).values())        // 并集 [12345]
console.log(setA.intersection(setB).values()) // 交集 [123]
console.log(setA.difference(setB).values())   // 差集 [5]
console.log(setA.isSubsetOf(setB))            // 子集 false

