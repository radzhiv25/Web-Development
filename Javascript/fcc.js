// This is how commneting is done.
// This is a single line comment 
/* This is a 
multi-line comment*/

// for declaration we can use let 
let myName = " Raj ";

// also a way to declare variable 
var myVariable;

// for assigning values
var myName = "Rajeev";
var myNumber = 25;
myName = raj; // as var is used so the value can be changed 
mynumber = 35;
console.log(myName)

// we can simply use arthimetic operators for evaluation
var sum = 10 + 10;
var difference = 54 - 27;
var multiplication = 10*10;
var division = 10/5;

// for increment we can use either ++ or += *also ++ means the variable = 'the value' + 1     
var sum = 15;
sum++; // or sum+=;

// same goes with decrement either -- or -= *also -- means the variable = 'the value' - 1
var sum = 20;
sum--; // or sum-=;

// we can give deciaml value to any variable not a necessary float is required 
var myDecimal = 13.6;

// also we can do arthimatical options with the decimal value also 
var myDecimalNumber = 10.5 + 10.7

// % this operator gives the remainder of two operators
var remainder = 11 % 2;

// this is how we use backslash to have quotation marks in our string
var myStr = "hello this is \"Rajeev\".";

// ALso we use \n-for newline \t-for tab effect // for commenting \\for backslash \r-carriage return \b-word boundary \f-form feed
var myString = "This how\n Newline works"

// this is how concatenation works
var mySentence = "Hello this is " + "how Javascript works!"

// also same goes with plusequals or += operator +
var mySentence = "This is the first line.";
mySentence += "This is the second line.";

// using var for concatenating
var myName = 'Rajeev';
var mySentence = "Hello this is " + myName + " and I am doing well!";

// for finding length of a string
var myName = "Javascript";
console.log(myName.length);

// for indexing we 
var myName = "Rajeev";
var theLetter = "";
theLetter = myName[1];

// indexing for alphabets from back
var myName = "Rajeev";
var theLetter = myName[myName.length - 2] // this will show the word e

// this is how we can make arrayVal 
myArray = ["hello" , "world"];

// this is arrayVal nesting 
myArray = ["hello" , ["hey"]]

// same indexing goees with the arrayVal 
var myArray = [10,20,30];
var myData = myArray[1] // so this will have the value of 20 as at 1 position 20 is their 

// value of an arrayVal can be changed by mentioning the index of the
var myArray = [20,56,889];
myArray[2] = 67; // so the value at index 2 will be changed to 67 from 889

// accessing a multi-dimensional arrayVal 
var myArray = [[1,2,3],[4,5,6],[7,8,9],[[10,11,12],13,14]];
var myData = myArray[2][0]; // this will show us the value of 2nd index zeroth position element i.e 4

// for appending or adding value to the end of an arrayVal we
var myArray = [10,20,"hello"]
myArray.push(["hello this is ", 3], 'arrayVal'); // this will be added to the end of the arrayVal 
// result myArray = [10,20,"hello",["hello this is ",3], 'arrayVal']

// for removing the last entry of an arrayVal we can use pop
var myArray = [1,56,78];
var myPop = myArray.pop(); // this will remove the last element of the arrayVal 
/* result- console.log(myPop) this will show value 78 
whereas    console.log(myArray) this will show value 1 and 56*/

// for removing first element of the arrayVal we have shift 
var myArray = [1,45,87];
var myRemoveFirst = myArray.shift(); //this will remove the first element of the arrayVal i.e 1
// result console.log(myRemoveFirst) this will show 10

// for adding elements in front of the arrayVal we have unshift 
var myArray = [24,56];
myArray.unshift(1);
// this will add 1 in the front of the arrayVal so myArray = [1,24,56]

// this part begins for the using of functions in Javascript
// 1. function when called without any parameters 
function nameFunction(){
    console.log("Hello World");
}
nameFunction();         // after calling it will show Hello World string in the console
// 2. function now based on parameters in
function nameFunction(value1,value2){
    console.log(value1 + value2);
}         // here value1 and value2 are parameters of the function nameFunction     
nameFunction(10,8); // after calling it will show the value as 18 as in value 1 and 2 10 and 8 were passed in

// by using var we declare variable in in global where everyone can see it easily
var myName =  "Hello";
function myFunction(){
    var myValue = 45;
}     // the var declared inside is local var and the one declared above is global

// also we can use same variable both in local and global 
var myName = "Java"
function myFunction(){
    var myName = "Javascript";
    console.log(myFunction);
}
myFunction();   //  in this case local variable is given preference than the global one so the output will be javascript rather than java 

// using return statement    
function addNum(num){
    return num + 100;
}
var value1 = addNum(200); // the value we will get is 200 

// using shift and push in fucntion
function nextFunc(arr, item){
    arr.push(item);
    return arr.shift();
}
var testArr = [1,2,3,4,5];   // so 1 will be removed from front and 6 will be added to the back


// boolean values are true and false and they aar also not written in strings format
function myFunc() {
    return true;
}

// using if statements 
function myFunc(wasThatTrue){
    if(wasThatTrue){
        return true;
    }
    return false;
}

// using if statements with equality operator
function myFunc(wasThatTrue) {
    if(wasThatTrue == 20){
        return "the value is correct";
    }
    return "the value is incorrect"; 
}

// using if statements with strictly equality operator 
function myFunc(wasThatTrue){
    if(wasThatTrue === 20){
        return "the value is correct";
    }
    return "the value is incorrect";
}  // the purpose of this is that here no string form will be considered of the i.e 20 will considered but '20' or "20" this won't be considerd same goes with strict inequality operator

// using inequality operator != to prove it is that it is equal to mentioned value or not 
function myFunc(wasThatTrue){
    if(wasThatTrue != 20){
        return "The value is incorrect";
    }
    return "the value is correct";
}

// using strict inequality 
function myFunc(wasThatTrue){
    if(wasThatTrue !== 20){
        return "The value is incorrect";
    }
    return "the value is correct";
}

// using greater than sign
function testGreaterThan(val) {
    if (val > 100) {  // Condition
        return "Over 100";
    }
    if (val > 10) {  // Condition
        return "Over 10";
    }
    return "10 or Under";
}

// using greater than equal to operator 
function testGreaterThanEqual() {
    if (testGreaterThanEqual >= 20){
        return "the value is 20 or more";
    }
    return "The value is less than 20";
}

// using less than sign 
function testSmallerThan(val) {
    if (val < 100) {  // Condition
        return "Over 100";
    }
    if (val < 10) {  // Condition
        return "Over 10";
    }
    return "10 or Under";
}
// using less than equal to sign
function testSmallerThanEqual(){
    if (testSmallerThanEqual <= 20){
        return "the value is 20 or more";
    }
    return "The value is less than 20";
}

// using logical and operators
function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
    return "No";
}

// using logical or operators
function testLogicalOr(val) {
    if (val > 20 || val < 10) {
        return "Outside";
    }
    return "Inside";
}

// using else statement with if statement 
function testElse(val) {
    var result = "";
    if (val > 5) {
        result = "Bigger than 5";
    }
    else {
        result = "5 or Smaller";
    }
    return result;
}

// using else if statement    
function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    }
    else if (val < 5) {
        return "Smaller than 5";
    }
    else {
        return "Between 5 and 10";
    }
}

// some change in order of else if statements 
function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}

// using chained if else statement
function testSize(num) {
    if (num < 5){
        return "Tiny";
    }
    else if (num < 10){
        return "Small";
    }
    else if (num < 15){
        return "Medium";
    }
    else if (num < 20){
        return "Large";
    }
    else if(num >= 20){
        return "Huge";
    }
    return "Change Me";
}

// using switch statement
function callSwtitch(val){
    var answer = '';
    switch(val){       // in switch operation strictly equal sign is used 
        case 1:
            answer = "hello";
            break;
        case 2:
            answer = "Hey";
            break;
        case 3:
            answer = "Ola";
            break;
        case 4:
            answer = "konichiwah";
            break;
    }
    return answer;
}

// using default statement in switch operation
function callSwitchDef(val){
    var answer = "";
    switch(val) {
        case "a":
            answer = "apple";
            break;
        case 2:
            answer = "ball";
            break;
        case 3:
            answer = 'cat';
            break;
        default:
            answer = "alphabets";
            break;
    }
    return answer;
}

// using Multiple identical options inn switch statment
function sequentialSizes(val) {
    var answer = "";
    // Only change code below this line
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }
    return answer;
}

// 
/*Count Change	Cards
        +1	   2, 3, 4, 5, 6
        0      7, 8, 9
        -1     10, 'J', 'Q', 'K', 'A'
*/
var count = 0;

function cc(card) {
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }
    var holdbet = 'Hold';
        if (count > 0) {
            holdbet = 'Bet';
        }
        return count + " " + holdbet;
return "Change Me";
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

// using var with objects 
// objects can be used without quotes if they are single string
var dog = {
    name : 'Dog',
    legs : 4,
    favorites : ['Ball', "sleep",5]
};

// using dot property for accessing object inside var 
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};
var hatValue = testObj.hat;      // by wruting this we will access the value of hat i.e ballcap
var shirtValue = testObj.shirt; 

// we can access the properties using bracket notation also
var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};
var entreeValue = testObj["an entree"]; // this also works same as dot notation
var drinkValue = testObj["the drink"]; 

// using variables to object properties
var dogs = {
    Fido: "Mutt",  Hunter: "Doberman",  Snoopie: "Beagle"
};
var myDog = "Hunter";
var myBreed = dogs[myDog];
console.log(myBreed);
//  The string Doberman would be displayed in the console. 
// this is another way to do the same  
var someObj = {
    propName: "John"
};
function propPrefix(str) {
    var arrayVal = "prop";
    return arrayVal + str;
}
var someProp = propPrefix("Name");
console.log(someObj[someProp]);
// someProp would have a value of the string propName, and the string John would be displayed in the console.

// updating object properties 
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};
// for updating either we can use dot or bracket notation
// therefore if we want to update name so we can do is that 
ourDog.name = "Happy Camper"; // or we can use
ourDog[name] = "Happy Camper"; // the crossed text means it aws above mentioned as a string so here also we need to mention it as a string only 

// adding a property can be done as the above mentioned method
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};
myDog.bark = "woof"; // hence bark will also be added in the object list

// for deleting something in the object property we can use 
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"],
    "bark": "bow-wow"
};
delete ourDog.bark; // hence bark will be deleted from the list

// using objects for lookups
function phoneticLookup(val) {
    var result = "";
    var lookup = {
        "alpha" : "Adams",
        "bravo" : "Boston",
        "charlie" :  "Chicago",
        "delta" : "Denver",
        "echo" : "Easy",
        "foxtrot" : "Frank"
    };
    result = lookup[val];
    return result;
}
phoneticLookup("charlie"); // this will give us the value chicago
// checking object for properties
var myObj = {
    top: "hat",
    bottom: "pants"
};
myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");
// The first hasOwnProperty returns true, while the second returns false.

// manipulating complex objects
var myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {
        "artist": "Daft Punk",
        "title": "Homework",
        "release_year": 1997,
        "formats": [ 
            "CD",
            "Cassette",
            "LP"
        ],
        "gold": true
    }
];

// accsessing nested objects in object properties using dot and bracket notation
var ourStorage = {
    "desk": {
        "drawer": "stapler"
    },
    "cabinet": {
    "top drawer": { 
            "folder1": "a file",
            "folder2": "secrets"
        },
        "bottom drawer": "soda"
    }
};
ourStorage.cabinet["top drawer"].folder2; // this will give a file
ourStorage.desk.drawer; // this will give stapler

// accessing nested arrays using above method but without dot and bracket 
var ourPets = [
    {
        animalType: "cat",
        names: [
            "Meowzer",
            "Fluffy",
            "Kit-Cat"
        ]
    },
    {
        animalType: "dog",
        names: [
            "Spot",
            "Bowser",
            "Frankie"
        ]
    }
];
ourPets[0].names[1];  // this will give Fluffy
ourPets[1].names[0];  // this will give Spot

// using things used above 
var recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};
function updateRecords(records, id, prop, value) {
    if (prop !== 'tracks' && value !== "") {
        records[id][prop] = value;
    } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
        records[id][prop] = [value];
    } else if (prop === "tracks" && value !== "") {
        records[id][prop].push(value);
    } else if (value === "") {
        delete records[id][prop];
    }
    return records;
}
updateRecords(recordCollection, 5439, 'artist', 'ABBA');


// using loops 
// first loop is while loop
var myArray = [];
var i = 0;
while(i < 5){
    myArray.push();
    i++;
}  // this will print an arrayVal of 5 myArray = [0,1,2,3,4]
   // for printing it in reverse direction we would use reverse() for printing the before one

// using for loop we need 3 conditions for the loop to run 
var myArray = [];
for (var i = 0; i < 5; i++ ){
    myArray.push(i);
} // this will print an arrayVal of 5 myArray = [0,1,2,3,4]

// print odd numbers using for loops
// Setup
var myArray = [];

// Only change code below this line
for (var i = 1; i <= 9 ; i+=2){
    myArray.push(i);
} // this will print an arrayVal of 5 myArray = [1,3,5,7,9]

// Iterating an arrayVal using for loop
var myArray = [1,2,3,4,5];
for (var i = 0; i < 20; i++){
    myArray.push(i);
} // this will print an arrayVal till the number 20 is reached

// using nested for loops   
function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr[i].length; j++){
            product *= arr[i][j];
    }
    }
    // Only change code above this line
    return product;
}
multiplyAll([[1,2],[3,4],[5,6,7]]); // this will return the return the product as 5040

// iterarting things using do while loops
var myArray = [];
var i = 1;
do {
    myArray.push(i);
    i++;
} while(i < 5);
// hence it will pirnt an arrayVal of 5 myArray = [1, 2, 3, 4]

// this is the use of recursion 
function sum(arr, n) {
    if (n <= 0){
        return 0;
    } else {
        return sum(arr, n-1) + arr [n-1];
    }
}

// generating random decimal number using math random
function generate(){
    return Math.random();
} // this will generate a random number between 0 to 1 which will be always less than 1 never equal to 1

// generating random whole numbers using math floor 
function whole(){
    return Math.floor(Math.random()*10);
} // this will generate any whole number between 1 and 10 not including 10 

// generating a whole number with a range 
function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin +1)) + myMin;
} // this will give us a number within a specified range

// using parseInt()
function convertToInteger(str) {
    return parseInt(str);
}
convertToInteger("56");
// this will convert the string to integer values

// using parseInt with radix
function convertToInteger(){
    return parseInt(str, radix);
}
convertToInteger(101); // this will give us 5

// using conditional operator
function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal";
}
checkEqual(1,2); 

// use mutliple conditions operations
function checkSign(num) {
    return (num > 0) ? "positive" : (num < 0) ? "negative" : "zero";
}
checkSign(10);
// hence the num entered accordingly it will show positive , negative and zero

// using recursion to create countdown
function countdown(n) {
    if (n < 1) {
        return [];
    } else {
        const arr = countdown(n - 1);
        arr.unshift(n);
        return arr;
    }
}

// use recursion to create a range of numbers 
function rangeOfNumbers(startNum, endNum) {
    if (endNum - startNum === 0) {
        return [startNum];
    } else {
        var numbers = rangeOfNumbers(startNum, endNum - 1);
        numbers.push(endNum);
        return numbers;
    }
}

//  using ECMAscript 6 which is basically what the browser understands and
// hereby let was introduce so as stop cnfusion between var and let as the var value changes when reinitialized
// unlike var we cannot declare variable with same name while using let 
let name = 'Rajeev'; // these are the ways of declaring 
// also use strict is used to counter common mistakes
' use strict';
// uses of let
function checkScope(){
    "use strict";
    let i = "function scope";
    if(true){
        let i = "block scope";
        console.log("The Blockscope is : ", i);
    }
    console.log("The functionscope is : ", i);
    return i;
}

// using constant keyword 
// in const once the value is assigned it can never be reassigned unlike var and let
const name = "Rajeev"; // this cannot be over-written

// changing values in an arrayVal declared in const or simply mutating an array 
const arrayVal = [1, 2, 3, 4, 5];
function edit(){
    arrayVal[0] = 5;
    arrayVal[1] = 4;
    arrayVal[2] = 3;
    arrayVal[3] = 2;
    arrayVal[4] = 1;
    return arrayVal;
}
edit(); // hence this will print the same array in reverse direction

// we also terminate the action of changing values by using freeze object 
function freezeObj() {
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    Object.freeze(MATH_CONSTANTS);
    try {
        MATH_CONSTANTS.PI = 99;
    } catch(ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

// this is using arrow to remove complex function steps 
// is the usage of that and here we get today's day date and time
const magic = () => {
    "use strict";
    return new Date();
};

// writing arrow functions with parameters
const myConcat = (arr1,arr2) => {
    return arr1.concat(arr2);
}  // also concat helps to combine to things 


// setting default parameters for the function using arrow
const increment = (number = 5, value = 1) => number + value;
// by default it will give the value as 6 or instead it will give the values as mentioned in the parameter 

// using spread operator to evaluate arrays in place of
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1]; 
console.log(arr2); 

// using destructment assignment to extract values from object 
const temperature = {
    yesterday : 35,
    today : 40,
    tomorrow : 45
};
const { yesterday, tomorrow} = temperature;

// using destructuring to assign variables to the object 
const temperature = {
    yesterday: 40,
    today: 43,
    tomorrow: 45
};
const { yesterday:highYesterday , today:highToday } = temperature;

// using destructuring assignment to assign variables to the nested objects
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
    };
const { today: { low:lowToday, high: highToday}} = LOCAL_FORECAST;

// swapping values 
let a = 8, b = 6;
[a,b] = [b,a];

// using destructuring assignment with the rest parameter to assign array elements
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
    "use strict";
    const [a, b, ...arr] = list;
        return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];

// using destructuring assignment to pass an object as a Functions's parameters
