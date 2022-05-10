// variables

// 1. Declare 3 variables with the name of a, b and c. a has type of string, b has type of number, and c has type of number

const a = "Summer"
const b = 3;
let c = 4;
console.log(a ," ",", ", b," ,",c)





// a and b can not be re-assigned, c can be re-assigned
c = 2222;

// the variable value can be of your choice
console.log(a ," ",", ", b," ,",c)

// 2. Write an if statement that has the following logic:
// if the length of a is larger than 5, print "a has more than 5 characters" to console, else print "a has less than 5 characters"
// if b is larger than 0 and smaller than 5, print "ping", else print "pong"
// if c is larger than b, print "c is larger than b", else print "c is smaller than b"






// functions

// 1. Write a function that will take 2 numbers as inputs, then return the sum of the 2 numbers.
function add(num1,num2) {

    return num1 + num2
}

console.log(add(2,3))

// 2. Create a similar function as the above, but return the multiple of the 2 numbers.
function multiply(num1 ,num2) {

    return  num1 * num2
}

console.log(multiply(2,3))
// 3. Write a function that accepts a number as input, if the number is odd, return a string 'odd', if this number is even, return a string 'even'.
function oddOrEven(num) {

    if(num % 2 == 0){
        console.log("Number Is Even ")
    }else{
        console.log("Number is Odd")
    }

}

console.log(oddOrEven(10))

// 5. Fix this function. We want to see 2 in the console instead of undefined
function hoisting() {
   // undefined
  let y = 2
  console.log(y)
}
hoisting()

// 6. Write a count function that runs from 1 to 100 using for loop
// if the current count is odd, print "odd", else print "even"
function count() {

    
    for (let i = 1; i <= 100; i++) {
        console.log(i);
    }
}
count()

// 7. Write a function that accepts a string as an input, and return a new string with the first character uppercased
// Ex: capitalized("abc") will return "Abc"
function capitalized(str) {

    let strNode  = str;
    let str2 = str.charAt(0).toUpperCase() +str.slice(1)

    console.log(str2)
}
capitalized("sumrooz")

// 8. Write a function accepts a number as input and then return the number reversed
// Ex: reverse(1234) will return 4321
function reverse(n) {

    
    return n
}

reverse(1234)
// 9. Write a function accepts a string as input and checks if that string is a palindrome. A palindrome is word, phrase, or sequence that reads the same backward as forward, Ex: madam
// if the string is a palindrome, return true, else return false
function isPalindrome() {}

// 10. Write a JavaScript function that accepts two numbers and print the larger
// Ex: printLarger(1,2) will console log 2 in the console
function printLarger(num1,num2) {


    if(num1 > num2){
        console.log(num1)
    }else{
        console.log("Number is not lower")
    }
}

printLarger(9,10)

// 11. Write a JavaScript function to extract a specified number of characters from a string
// Ex: extract("abcd", 2) will return "ab"
// Ex: extract("abcd", 3) will return "abc"

// 12. Convert two functions into arrow functions

let printLargerNum = (num1,num2) =>{
    if(num1 > num2){
        console.log(num1)
    }
}

printLargerNum(20,13)


let checkNum = (num1) =>{
    if(num1 <=5){
        console.log("Number is less than 5")
    }else{
        console.log("Number is Greater Than 5")
    }
}

checkNum(10)