function insertionSort(inputArr) {
    for (let i = 1; i < inputArr.length; i++) {
      // Choosing the first element in our unsorted subarray
      let current = inputArr[i];
      // The last element of our sorted subarray
      let j = i-1; 
      while ((j > -1) && (current < inputArr[j])) {
        inputArr[j+1] = inputArr[j];
        j--;
      }
      inputArr[j+1] = current;
    }
    return inputArr;
  }
    
  const inputArr = [6, 5, 4, 2, 3]
  console.log(insertionSort(inputArr)) // [2, 3, 4, 5, 6]