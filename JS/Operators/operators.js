//Arithmetic operators

//Single operators



var myAge, yourAge, year, result;

myAge=22;
yourAge = 20;
year =2023;

//subtraction
result = year - myAge;
console.log('I was born in '+result+'.');

//Addition
result = year + 10;
console.log('After ten years It will be '+result);

//multiplication
result = myAge * yourAge;
console.log('Product of our ages '+result);

//division
console.log('Division of our ages : '+(myAge/yourAge));

//modules
console.log('Modules of our ages :'+(myAge%yourAge));

//Exponentiation
console.log('Exponent of my age :'+(myAge**2));
//myage * myage

//if myAge**3 It means myAge * myAge * myAge

//Increment
console.log(myAge++);
console.log('post increment of my age '+myAge);

myAge = 22;

console.log(++myAge);
console.log('Pre increment of my age '+myAge);

//Decrement
console.log(myAge--);
console.log('post decrement of my age '+myAge);

myAge = 22;

console.log(--myAge);
console.log('Pre decrement of my age '+myAge);


//operetaion precedance

var cal = (20+30)/10+4.5-2*4**2;
console.log(cal);

//multiple operators
var ans1, ans2;
ans2=10;
ans1=ans2;

console.log(ans1);


//----------Asignment operators----------

//equal 
var myname = 'Iresh';
console.log(myname);

//Addition with equal
var age = 15;
age += 10;
console.log(age);

//Subtraction with equal
age -= 15;
console.log(age);

//division withe qual
age = 24;
age /= 4;
console.log(age);

//Modules with equal
age %= 4;
console.log(age);

//Exponetiation with equal
age **= 2;
console.log(age);