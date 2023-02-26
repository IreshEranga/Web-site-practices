//---------------Introduction to functions----------------
//--------------------------------------------------------

/*
function is re usable peace of code that does a specific piece
*/

// Define functions------------

//without return

function addNumbers(num1, num2){
    var ans = num1 + num2;
    console.log('Addition :'+ans);
}

//call the function
num1 = parseFloat(prompt('Number 1 value'));
num2 = parseFloat(prompt('Number 2 value'));
addNumbers(num1, num2);


//with return
function subNumbers(num1,num2){
    var sub = num1 - num2;
    return sub;
}

var sub = subNumbers(30,20);
console.log("Subtraction :"+sub);

//-----------------------------------


//define
var birthYear;

function calAge(birthYear){
    return 2023-birthYear;
}

//call function
console.log("Kasun is "+calAge(2001)+' years old.');