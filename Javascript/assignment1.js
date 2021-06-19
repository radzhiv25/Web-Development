let _country = "India";
let _continent = "Asia";
let _population = "1.3 billion";

console.log(_country)
console.log(_continent)
console.log(_population)
/*
let heightMark = 188;
let heightJohn = 176;
let weightMark = 95;
let weightJohn = 85;

let bodyMassIndexM = (weightMark / heightMark ** 2) 
let bodyMassIndexJ = (weightJohn / heightJohn ** 2) 

console.log(bodyMassIndexM);
console.log(bodyMassIndexJ);

let markHigherBMI = bodyMassIndexM > bodyMassIndexJ
console.log(markHigherBMI); */

const firstName = 'Jonas';
const job = 'Teacher';
const birthYear = 1998 ;
const now = 2021;

//const bio = "I'm " + firstName + ' and my age is ' + (now - birthYear) + ' my profession is ' + job ;
//console.log(bio);
const bio = ` I'm ${firstName} and my age is ${now - birthYear}  and by profession I'm a ${job}`;
console.log(bio); 
// for multiple lines we have 
console.log("Hello \n\
multiple lines \n\
and more we have ");
console.log(`these are 
the things in multiple 
lines and we have more to go`)

const age = 19;
const isOldEnough = age >= 18;

if(isOldEnough){
    console.log('Sarah can start driving license 😊')
} 
else{
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young for driving license wait another, ${yearsLeft} years`);
}
const massMark = 90;
const heightMark = 1.89;
const massJohn = 82;
const heightJohn = 1.35;
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);

if (BMIMark > BMIJohn){
    console.log( `${BMIMark} is higher than the ${BMIJohn}` );
}
else{
    console.log(`${BMIJohn} is higher than the ${BMIMark}` );
}