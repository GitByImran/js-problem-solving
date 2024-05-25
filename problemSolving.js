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
