"use strict"; // strict variable declaration
// intro to variables

// variables can store some information
// we can use that information later
// we can change that information later

// declare a variable 

var firstName = "Name";

// use a variable 
console.log(firstName);

// change value 

firstName = "AnotherName";

console.log(firstName);




// rules for naming variables 

// you cannot start with number 
// example :- 
// 1value (invalid)
// value1 (valid)

var value1 = 2;
console.log(value1);

// you can use only undersore _ or dollar symbol 
// first_name (valid)
// _firstname (valid) 

// first$name (valid)
// $firstname (valid)

// you cannot use spaces 
// var first_name = "akshay"; // snake case variable declaration
// var firstName = "akshay"; // camel case variable declaration
// first name (invalid)

// convention 
// start with small letter and use camelCase 




// let keyword 
// declare variable with let keyword 

let firstNameAgain = "akshay";
firstNameAgain = "abfirst";
console.log(firstNameAgain);


// block scope vs funtion scope (covered later in this video)



// declare constants 

const pi = 3.14;
console.log(pi);