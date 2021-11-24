/**
 * To run this file in Gitpod, use the 
 * command node rest-parameter-syntax.js in the terminal
 */

// Regular function call 

const sumAll = (a, b, c) => a + b + c

let sumThreeNum = sumAll(1, 2, 3)

console.log("Sum 3 numbers: ", sumThreeNum)

// Extra arguments are ignored


let sumSixNum = sumAll(1, 2, 3, 4, 5, 6)

console.log("Sum 6 numbers: ", sumSixNum)

// Function using ...rest

const sumRest = (a, b, c, ...rest) => {
    let sum = a + b + c
    for (let i of rest) {
        sum += i
    }
    return sum
}

let sumTenNum = sumRest(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

console.log("Sum 10 numbers: ", sumTenNum)