class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

function defaultEquals(a, b) {
  return a === b
}

// push(element)             向链表尾部添加一个元素
// insert(element, index)    向链表特定位置插入一个新元素
// getElementAt(index)       返回链表中特定位置的元素，如果链表中不存在这样的元素，则返回undefined
// remove(element)           从链表中移除一个元素
// indexOf(element)          返回元素在链表中的索引。如果链表中没有该元素则返回-1
// removeAt(index)           从链表的特定位置移除一个元素
// isEmpty()                 如果链表中不包含任何元素，返回true，反之返回false
// size()                    返回链表中包含的元素个数
// toString()                返回表示整个链表的字符串（只输出元素值）


class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0
    this.head = null
    this.equalsFn = equalsFn
  }

  push(element) {
    const node = new Node(element)
    if (this.head === null) {
      this.head = node
    } else {
      let current = this.head
      while(current.next !== null) {
        current = current.next
      }
      current.next = node
    }
    this.count += 1
  }

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head
      if (index === 0) {
        this.head = current.next
      } else {
        const previous = this.getElementAt(index -1)
        current = previous.next
        previous.next = current.next
      }
      this.count -= 1
      return current.element
    } else {
      return undefined
    }
  }

  getElementAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head
      for (let i = 0; i < index && current != null; i += 1) {
        current = current.next
      }
      return current
    } else {
      return undefined
    }
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element)
      let current = this.head
      if (index === 0) {
        node.next = current
        this.head = node
      } else {
        const previous = this.getElementAt(index - 1)
        current = previous.next
        node.next = current
        previous.next = node
      }
      this.count += 1
      return true
    } else {
      return false
    }
  }

  indexOf(element) {
    let current = this.head
    for (let i = 0; i < this.count; i += 1) {
      if ( this.equalsFn(current.element, element)) {
        return i
      }
      current = current.next
    }
    return -1
  }

  remove(element) {
    const index = indexOf(element)
    return this.removeAt(index)
  }

  size() {
    return this.count
  }

  isEmpty() {
    return this.size() === 0
  }

  getHead() {
    return this.head
  }

  toString() {
    if (this.head === null) {
      return ''
    }
    let objString = `${this.head.element}`
    let current = this.head.next
    for (let i = 1; i < this.count && current !== null; i += 1) {
      objString += `,${current.element}`
      current = current.next
    }
    return objString
  }
}


const linkedListA = new LinkedList()

linkedListA.push(1)
linkedListA.push(2)
linkedListA.push(3)
linkedListA.push(4)
linkedListA.push(5)
linkedListA.push(6)

console.log(linkedListA.toString())
console.log(linkedListA.removeAt(1))
console.log(linkedListA.insert(7, 5))
console.log(linkedListA.indexOf(0))
console.log(linkedListA.size())
console.log(linkedListA.isEmpty())
console.log(linkedListA.toString())

// 双向链表、循环链表、有序链表

class DoublyNode extends Node {
  constructor(element, next, prev) {
    super(element, next)
    this.prev = prev
  }
}

// 双链表
class DoublyLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn)
    this.tail = null
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new DoublyNode(element)
      let current = this.head
      if (index === 0) {
        if (this.head === null) {
          this.head = node
          this.tail = node
        } else {
          node.next = current
          current.prev = node
          this.head = node
        }
      } else if (index === this.count) {
        current = this.tail
        current.next = node
        node.prev = current
        this.tail = node
      } else {
        const previous = this.getElementAt(index -1)
        current = previous.next
        node.next = current
        previous.next = node
        node.prev = previous
        current.prev = node
      }
      this.count += 1
      return true
    } else {
      return false
    }
  }

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head
      if (index === 0) {
        this.head = current.next
        if (this.count === 1) {
          this.tail = null
        } else {
          this.head.prev = null
        }
      } else if (index === this.count -1) {
        current = this.tail
        this.tail = current.prev
        this.tail.next = null
      } else {
        current = this.getElementAt(index)
        const previous = current.prev
        previous.next = current.next
        current.next.prev = previous
      }
      this.count -= 1
      return current.element
    } else {
      return undefined
    }
  }
}


// 循环链表
class CircularLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn)
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element)
      let current = this.head
      if (index === 0) {
        if (this.head === null) {
          this.head = node
          node.next = this.head
        } else {
          node.next = current
          // 此处原书错误写为 this.getElementAt(this.size())
          current = this.getElementAt(this.size() - 1)
          this.head = node
          current.next = this.head
        }
      } else {
        const previous = this.getElementAt(index - 1)
        node.next = previous.next
        previous.next = node
      }
      this.count += 1
      return true
    } else {
      return false
    }
  }
}

const cirList = new CircularLinkedList()

cirList.push(1)
cirList.push(2)
cirList.push(3)
cirList.insert(4, 0)

console.log(cirList.toString())
