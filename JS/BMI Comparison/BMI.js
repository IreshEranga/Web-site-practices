//---------------------------------
//-------BMI Comparison------------
//---------------------------------


/*Kasun and chamal are trying to compare their BMI which is calculated using following formula:
BMI = mass / height ^ 2
(mass in kg and height in meter)

1.store kasun's and chamal's mass and height in variables
2.Calculate both their BMI's
3.create a boolean variable containing information about whether kasun has a higher BMI than chamal
4.Print a string to in alert box containing the variable from step 3*/

var  Mass, isKasun, Height, cBMI, kBMI; //variable declaration

//kasun's BMI
Mass = prompt("Kasun's mass : ");
Height = prompt("Kasun's height : ");


kBMI = Mass / (Height**2);
alert("Kasun's BMI : "+kBMI);

//Chamal's BMI
Mass = prompt("Chamal's mass : ");
Height = prompt("Chamal's height : ");

cBMI = Mass / (Height**2);
alert("Chamal's BMI : "+cBMI);

//Boolean
isKasun = (kBMI > cBMI);

alert(isKasun);
