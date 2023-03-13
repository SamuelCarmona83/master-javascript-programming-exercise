// Write your function here
const isEitherEven = (num1, num2) => {
    const isEven = (num) => num % 2 == 0
    return isEven(num1) || isEven(num2)
}