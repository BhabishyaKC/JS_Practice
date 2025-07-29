// TYPE CONVERSION

// CONVERTING STRING TO A NUMBER


const a = '3'
const b = '10'

console.log(a+b) // addition operator always takes all the number as a strings


const aNumber = Number(a)
const bNumber= Number(b)

console.log(aNumber + bNumber)


// EXAMPLE WITH TYPE CHECKING

const c = Number(a)
const d = Number(b)


console.log (typeof a)
console.log(typeof b)
console.log(typeof c)
console.log( typeof d)


// CONVERTING NUMBER STRING TO NUMBER 

const num = 123
const str = String(num) // It will change the number into a string
console.log(typeof str) 

// CONVERSION PROCESS

const num1 = 123
const num2 = 345

const str1 = String(num1)
const str2 = String(num2)

console.log(typeof num1)
console.log(typeof num2)
console.log(typeof str1)
console.log(typeof str2)


// CONVERTING TO BOOLEAN

const str3 = 'hello'
const str4 = '';


console.log(Boolean(str3))
console.log(Boolean(str3))



const num3  = 10
const num4 = 0


console.log(Boolean(num3))
console.log(Boolean(num4))



// PRATICAL EXAMPLE

// Example 1: Converting User input from Text Area

const input = '40'
const nums = Number(input)

if (!isNaN(nums)){
  console.log(nums + 10)
}else{
  console.log('Invalid Input')
}


// Example 2 : Checking boolean variables

// CHECKING BOOLEAN VALUES FOR DIFFERENT DATA TYPES

console.log(Boolean("Parkasd"))
console.log(Boolean(''))
console.log(Boolean(0))
console.log(Boolean(100))
console.log(Boolean(-1))









