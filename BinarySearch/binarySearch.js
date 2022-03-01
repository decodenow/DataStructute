const arr = [1, 3, 6, 18, 27]

function binarySearch(el) {
    let start = 0,                      
    end = arr.length - 1,
    result

    while (start < end) {
        let mid = parseInt((start + end)/2)
    
        if (el > arr[mid]) start = mid + 1
        else end = mid

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

binarySearch(27) // Element found at position: 4
binarySearch(16) // Element not found
