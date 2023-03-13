// Write your function here
const areBothOdd = (num1, num2) => {
    const isOdd = (num) => num % 2 != 0
    return isOdd(num1) && isOdd(num2)
}