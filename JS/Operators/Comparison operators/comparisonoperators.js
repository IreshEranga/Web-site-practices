//---------------------------------------------------
//---------------comparison operators----------------
//---------------------------------------------------

var a = 20;
var b = '20';
var c = 5;
var d = 15;

//equal to
if(a==b){
    //Equal value and equal type
    if(a===b)
    {
        console.log('Both value and type of a is equal to b');
    }
    //Not equal value or not equal type
    else if(a !== b){
        console.log('Only value or type a is equal to b ');
    }
}

//greater than or equal
if(a >= 10){
    if(a > 10){
        console.log('a is greater than 10')
    }
    else if(a == 10)
    {
        console.log('a is equal to 10');
    }
}

//not equal
if(a!=c){
    //less than
    if(a<c){
        console.log('a is less than c');
    }
    else{
        console.log("a is greater than c");
    }
}

//less than or equal to
/*
if(c<=d){
    if(c<=5){
        console.log('c is less than or equal to 5');
    }
    else{
        console.log('c is greater than 5');
    }
}*/

//ternary operator

c <= 5 ? console.log('c is less than or equal to 5') : console.log('c is greater than 5');