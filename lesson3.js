// Difference between LET, VAR, and CONST

// ** VAR

// VAR can be redeclare and updated i.e
var message = "hello"
var message = "hi"
var message= "ramesh"
console.log(message)
// Above code gives us output in console as "ramesh" which doesn't make sense



// ** LET

// LET cannot be redeclare but can update the value i.e
let hello = "this is let"
let hello = "this is another let" // we cannot do this this is called redecleration instead we can update the variable name value i.e
hello = "this is another one let" 
console.log(hello)



// ** CONST

// CONST is used in such cases where the value should remain constant throuhout the whole project 
// CONST means constant it cannot be redeclared nor updated 

const constant= "Value of PI"
const constant = "Value of Gravity" // Cannot be redeclared
constant = "Value of speed of light" // Cannot be updated again
console.log(constant)