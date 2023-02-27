//--------------------------------------
//-------------Function expressions-----
//--------------------------------------

//Function expression
var profession = function(job, firstName){
    switch(job){

    case 'Doctor' :
        return firstName+' is treating patients.';
    case 'teacher' :
        return firstName+' is teaching students.';
    default :
        return firstName+' is doing something else.';
    
    }
    
}


//calling function
console.log(profession('Doctor', 'Iresh'));
console.log(profession('teacher', 'kasuni'));