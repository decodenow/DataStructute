const arr = [1, 3, 6, 18, 27]

function linearSearch (el) {
    let start = 0,
    result

    for (; start < arr.length; start++) {
        if (arr[start] === el) {
            result = start
            break
        }
    }

    if (result >= 0) 
        console.log(
        `Element found at position: ${start}`
        )
    else console.log(`Element not found`)
}

linearSearch(27) // Element found at position: 4
linearSearch(16) // Element not found