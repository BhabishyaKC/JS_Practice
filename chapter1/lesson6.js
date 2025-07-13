// CONCATENATION AND TEMPLATE LITERAL IN JS
// Basically it is the process of adding some content to the varaiable 


let myName = "Bhabishya"
let myAge = "23"

// Now i can make a sentence like "Hi! My name is Bhabishya KC and I am 23 years old" by using concatenation 

let fullSentence = "Hi! My name is " + myName + ' KC ' + 'and I am ' + myAge + ' years old' // if we console this we will get the above mention sentence

console.log(fullSentence)



// TEMPLATE LITERAL / STRINGS  

// it is specially written inside the back tick with a dollar sign and ta vriable name is placed inside the curly braces


let userName ='Bhabishya KC'
let userAge = '23'
let userHobby= 'singing'
let userJob = 'software developer'
let userLove ='my family'



let userInfo = `My name is ${userName}
I am ${userAge} years old
My hobby is ${userHobby}
I am a ${userJob}
I love my ${userLove}`
console.log(userInfo)


