//------------------------------------------------------
//----------------JS scope------------------------------
//-----------------------------------------------------


//local variables
function addNum(a,b){
    var a = 10;
    var b = 5;
    console.log(a+b);
}

addNum();

//global variablees
var subject = 'maths';
function mySub(){
    console.log('my favorite subject is '+subject);
    subject = 'science';
}
mySub();
mySub();

