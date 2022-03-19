const arr = [64, 25, 12, 22, 11]

for (let i = 0; i < arr.length - 1; i++) {
    let s = i
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[s]) s = j
    }
    let temp = arr[i]
    arr[i] = arr[s]
    arr[s] = temp
}

console.log(arr) // [ 11, 12, 22, 25, 64 ]