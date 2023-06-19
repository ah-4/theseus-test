// I admiteed that the sum of two digits in the table can accept the same digit. 

function sumOfTwoDigitsInTheTable(arr, target) {
    for (let x of arr) for (let y of arr) if (x + y === target) return true;
    return false;
}

const result1 = sumOfTwoDigitsInTheTable([1, 8, 3, 6, 9, 2, 5, 12], 9) // true
const result2 = sumOfTwoDigitsInTheTable([1, 1, 3, 6, 9, 2, 5, 12], 14) // true
const result3 = sumOfTwoDigitsInTheTable([1, 80, 3, 6, 9, 2, 6, 12], 17) // false
const result4 = sumOfTwoDigitsInTheTable([1, 90, 9, 6, 32, 2, 5, 12], 18) // true

console.log("result1 : ", result1)
console.log("result2 : ", result2)
console.log("result3 : ", result3)
console.log("result4 : ", result4)

/******* Sum of two digits in the table ******/
// If two numbers in the array add up to the target, then the function returns true; otherwise, it returns false.