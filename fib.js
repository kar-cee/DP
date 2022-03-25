// recurssive approach
// const fib = (n) => {
//     if (n <= 2)
//         return 1
//     else
//         return fib(n-1) + fib(n-2)
// }

// console.log(fib(7))

// dynamic approach using memoization

const fibo = (n, memo = {}) => {
    if (n in memo) return memo[n]
    if (n <= 2) return 1
    memo[n] = fibo(n - 1) + fibo(n - 2)
    return memo[n]
}

console.log(fibo(10))