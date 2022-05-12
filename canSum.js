const canSum = (target, numbers) => {
    if (target < 0) return false
    if (target === 0) return true
    for (let n of numbers) {
        if (canSum(target - n, numbers) === true)
           return true
    }
    return false
}

console.log(canSum(5, [2, 3, 4, 1]))
console.log(canSum(7,[2,3]))