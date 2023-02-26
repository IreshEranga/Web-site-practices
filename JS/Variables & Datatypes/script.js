/*Variables*/

// --Primitive data types--

/*
Number  -> float,int
String  ->
Boolean  ->
undifined  -> data type of variable    that doesn't have a value yet.
Null  -> No existent

*/

//Only can start a variable name with a letter , undescore or $ sign.

//Can't use any reserved keywords as variable names

//create variables

var firstName = 'Iresh';        //defined variables
var lastName = 'Magage';
var age = 26;
var isOk = true;

var job, height;    //variable declaration

//print only variable
console.log(firstName);

//print the variable with a string
console.log('My name is '+firstName  +lastName);

//type  corection
console.log('My age is ' +age);
console.log('It is '+isOk);
console.log('I am a '+job);


//get variable type
console.log(typeof(lastName));
console.log(typeof(firstName));
console.log(typeof(age));
console.log(typeof(isOk));

//define a variable

job = 'Doctor';
console.log('I am a '+job);

//variable mutation
lastName = 'Eranga';
console.log(lastName);
console.log('I am '+lastName+' I am a '+job);

//display alert
alert('My name is '+firstName+'. Iam '+age+' years old. And am I ok? '+isOk+'.');

//get user inputs
height=prompt('What is your height ? ');
console.log('My height is '+height+' feats.');
alert('My height is '+height+' feats.');