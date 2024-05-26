// problem solving

// 

function fibonacci(n) {
    const fib = [0, 1]
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib
}

console.log(fibonacci(5));

function recursiveFibonacci(n) {
    if (n < 2) {
        return n
    }
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
}
console.log(recursiveFibonacci(5));

//

function factorial(n) {
    let result = 1
    for (let i = 2; i <= n; i++) {
        result = result * i
    }
    return result
}

console.log(factorial(5));

function recursiveFactorial(n) {
    if (n === 0) {
        return 1
    }
    return n * recursiveFactorial(n - 1)
}
console.log(recursiveFactorial(5));

//

function isPrime(n) {
    if (n < 2) {
        return false
    }
    for (let i = 2; i <= n; i++) {
        if (n % 2 === 0) {
            return false
        }
    }
    return true
}

console.log(isPrime(5));

//

function isPowerOfTwo(n) {
    if (n < 1) {
        return false
    }
    while (n > 1) {
        if (n % 2 !== 0) {
            return false
        } else {
            n = n / 2
        }
    }
    return true
}

console.log(isPowerOfTwo(5));

//

function isPowerOfTwoBitwise(n) {
    if (n < 1) { return false }
    return (n & (n - 1)) === 0
}

console.log(isPowerOfTwoBitwise(8));

//

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i
        }
    }
    return -1
}

console.log(linearSearch([-5, 3, 7, 20, 5, 6], 20));

//

function binarySearch(arr, target) {
    arr.sort((a, b) => a - b)
    console.log(arr);
    let leftIndex = 0, rightIndex = arr.length - 1
    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        console.log('l : ' + leftIndex + ' , ' + 'r : ' + rightIndex + ' , ' + middleIndex);
        if (target === arr[middleIndex]) {
            return middleIndex
        }
        if (target < arr[middleIndex]) {
            rightIndex = middleIndex - 1
        } else {
            leftIndex = middleIndex + 1
        }
    }
    return -1
}

console.log(binarySearch([-5, 3, 7, 20, 5, 6], 6));

//

function recursiveBinarySearch(arr, target) {
    arr.sort((a, b) => a - b)
    return search(arr, target, 0, arr.length - 1)
}

function search(arr, target, leftIndex, rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    if (leftIndex > rightIndex) {
        return -1
    }
    if (target === arr[middleIndex]) {
        return middleIndex
    } else if (target < arr[middleIndex]) {
        return search(arr, target, leftIndex, middleIndex - 1)
    } else {
        return search(arr, target, middleIndex + 1, rightIndex)
    }

}

console.log(recursiveBinarySearch([-5, 3, 7, 20, 5, 6], 6));

// bubble sort

function bubbleSort(arr) {
    let swapped
    do {
        swapped = false
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swapped = true

                // [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
                // swapped = true
            }
        }
    } while (swapped)
    return arr
}

console.log(bubbleSort([-5, 40, 35, 2, 5, 87, -9]));

// insertion sort

function insertionSort(arr) {
    for (let i = 1; i < arr.length; arr++) {
        let numberToInsert = arr[i]
        let j = i - 1

        while (j >= 0 && arr[j] === numberToInsert) {
            arr[j + 1] = arr[j]
            j = j - 1
        }
    }
    return arr
}

insertionSort([-5, 40, 35, 2, 5, 87, -9])

//quick sort

function quickSort(arr) {
    if (arr.length < 2) {
        return arr
    }
    let pivot = arr[arr.length - 1], right = [], left = []
    console.log('pivot: ', pivot);
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([-5, 40, 35, 2, 5, 87, -9]));

//merge sort

function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const leftArray = arr.slice(0, mid);
    const rightArray = arr.slice(mid);
    return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(leftArray, rightArray) {
    const sortedArray = [];

    while (leftArray.length && rightArray.length) {
        if (leftArray[0] <= rightArray[0]) {
            sortedArray.push(leftArray.shift());
        } else {
            sortedArray.push(rightArray.shift());
        }
    }
    return [...sortedArray, ...leftArray, ...rightArray];
}

console.log(mergeSort([-5, 40, 35, 2, 5, 87, -9])); 
