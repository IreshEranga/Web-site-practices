//---------------------------------------------------
//---------------Switch case-------------------------
//---------------------------------------------------

var empName = "kasun";
var jobRole = "Doctor";

switch(jobRole.toLocaleLowerCase()){  //toLocaleLowerCase()is used to getrid from upercases. from this it neglect the upercase letters and consider them as lowercase leteers
        case 'teacher':
            console.log(empName+' is a teacher');
            break;
       /* case 'doctor' :
            console.log(empName+' is a doctor');
            break;*/
        
            //we can use many cases in one case buy this it consider OR operator.
        case 'doctor' :
        case 'engineer' :
            console.log(empName+' is a doc');
            break;
        default :
        console.log(empName+' does something else');
        break;
}


//-----------------------------------------------------

var age = 20;
switch(true){
    case age < 20:
        console.log(empName+' is under 20');
        break;
    case age >=20 && age<30 :
        console.log(empName+' is in perfect age');
        break;
    case age>= 30 && age <50 :
        console.log(empName+' is mature');
        break;
    default :
        console.log(empName+' is old');
        break;
}