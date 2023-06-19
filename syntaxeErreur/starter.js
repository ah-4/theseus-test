// Defining closures constants
const CLOSURES_ENTRANCE = ["{", "[", "("];
const CLOSURES_CLOSING = ["}", "]", ")"];

/**
 * Check if the set of closures is valid.
 * @param {string} string the string to check
 */
function isValidClosure(string) {
    // Creating stack
    const closureStack = [];
    // Converting string to array
    const stringToArray = string.split("");
    // Result
    let result = true;

    stringToArray.forEach((char) => {
        if (CLOSURES_ENTRANCE.includes(char)) {
            // Pushing to stack if it's an entrance
            closureStack.push(char);
        } else if (CLOSURES_CLOSING.includes(char)) {
            // Poping from stack if it's a closing and checking if it's the same type
            const lastItem = closureStack.pop();
            if (CLOSURES_ENTRANCE.indexOf(lastItem) != CLOSURES_CLOSING.indexOf(char)) result = false;
        }
    });

    return result;
}

const result1 = isValidClosure("{([{}])}") // true
const result2 = isValidClosure("([)]") // false
const result3 = isValidClosure("{[])") // false
const result4 = isValidClosure("{[{[({()})]}]}") // true
const result5 = isValidClosure("{[{[({()})]}]]") // false

// Added by me
const result6 = isValidClosure("{[ { [({( with some spaces and letters)}    )]} ]}{()}") // true

console.log("result1 : ", result1)
console.log("result2 : ", result2)
console.log("result3 : ", result3)
console.log("result4 : ", result4)
console.log("result5 : ", result5)
console.log("result6 : ", result6)

/******* Is valid closure ******/
// Check if the set of closures is valid.