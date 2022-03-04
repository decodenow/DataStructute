// Factorial of 3 using recursion

function factorial(num) {

    // base condition
    if (num <= 1) {
        return 1
    }

    return num * factorial(num - 1)
}

const res = factorial(3)
console.log(res) // 6
