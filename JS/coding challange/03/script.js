//-------------------------------------------------------
//---------------BMI with objects------------------------
//-------------------------------------------------------

/*
LEt's remember the first coding challenge where kasun and chamal compared their BMIs. Let's now implement the same functionality with objects and methods.
1.For each them, create an object with full name, mass and height.
2.Then add a method to each object to calculate the BMI. save the BMI to the object and also return it from the method.
3.At the end , display the highest BMI with the full name. Don't forget they might have same BMI.
BMI = mass/(height^2)
*/


//declare objects
var kasun = new Object();
var chamal = new Object();

//add properties to kasun
kasun.fullName = prompt('Enter kasun full name');
kasun.mass = prompt("Enter kasun's mass");
kasun.height = prompt("Enter kasun's height");

//add properties to chamal
chamal.fullName = prompt('Enter chamal full name');
chamal.mass = prompt("Enter chamal's mass");
chamal.height = prompt("Enter chamal's height");


//Add BMI method for both
kasun.BMI = chamal.BMI = function(){
    this.BMIval = this.mass / (this.height ** 2);
    return this.BMIval;
}

console.log(kasun);
console.log(chamal);
console.log(kasun.BMI());
console.log(chamal.BMI());

//find the highest BMI
if(kasun.BMI() > chamal.BMI()){
    alert(kasun.fullName+' has the highest BMI '+kasun.BMI());
}
else if(kasun.BMI() < chamal.BMI()){
    alert(chamal.fullName+' has the highest BMI '+chamal.BMI());
}
else{
    alert(kasun.fullName+' and '+chamal.fullName+' both has same BMI '+kasun.BMI());
}