
// question 5

// array [int], iterates over the array, and returns a new array.
// returned array should contain the resule of
// raising 2 to the power of the original input element

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// first way using for 
for (let i = 0; i < arr.length; i++) {
    let power = arr[i] ** 2;
    console.log(power)
}

console.log("space")

// 2nd way using forEach
arr.forEach(function (power) {
    console.log(power ** 2);
})
console.log("space")

// third way using map with join to sort it as array without []
// //declaration       add an function inside map
let map1 = arr.map(power => power ** 2).join(" ")
console.log(map1)
console.log("space")

//4th way using function in map
function multiply(element) { // create a function to
    return element * element;
}
let map2 = arr.map(multiply)
console.log(map2)


// 5th way using Math.pow method 
function map4(arr) {
    return arr.map(function (number) {
        return Math.pow(number, 2)
    })
}
console.log(map4(arr))



// question 6

// // function takes an array of numbers
// // use map to return a new array to sort even and odd numbers
// // if there any string of it, it should return 'N/A'


function evenOrOdd(arr) {
    const result = arr.map((num) => {
        if (isNaN(num)) { // || isNaN(num) is another way of excluding numbers .. just like typeof num   typeof num !== "number"
            return "N/A";
        } else if (num % 2 === 0) {
            return "even";
        } else {
            return "odd";
        }
    });
    return result;
}
console.log(evenOrOdd([1, 2, "Mais", 3, 4, 5]))



// question 7

function fizzbuzz(numbers) {
    const output = [];

    numbers.forEach((ele) => {

        if (ele % 3 === 0 && ele % 5 === 0) {
            output.push("Fizz Buzz")
        } else if (ele % 5 === 0) {
            output.push("Buzz")
        } else if (ele % 3 === 0) {
            output.push("Fizz")
        } else {
            output.push(ele)
        }

    })
    return output
}
console.log(fizzbuzz([3, 5, 7, 9, 15, 30, 44, 1, 60]))
