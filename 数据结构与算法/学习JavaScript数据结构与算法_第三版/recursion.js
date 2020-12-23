// 原始的斐波那契数方法
function fibonacci(n) {
  if (n < 1) return 0
  if (n === 1 || n === 2) return 1
  return fibonacci(n - 1) + fibonacci(n - 2)
}

// 通过记忆优化效率
function fibonacciMemoization(num) {
  const memo = [0, 1]
  const fibo = n => {
    if (n < 2) return memo[n]
    if (memo[n]) return memo[n]
    let data = fibo(n - 1) + fibo(n - 2)
    memo[n] = data
    return data
  }
  return fibo(num)
}

console.time('normal')
console.log(fibonacci(40))
console.timeEnd('normal') // 843.453ms
console.time('Memoization')
console.log(fibonacciMemoization(40))
console.timeEnd('Memoization') // 0.481ms