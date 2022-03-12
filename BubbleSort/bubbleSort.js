const arr = [6, 2, 8, 4, 10]

for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
}

console.log(arr) // [ 2, 4, 6, 8, 10 ]