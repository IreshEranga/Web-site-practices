//------------------------------------------------------
//--------------Objects---------------------------------
//------------------------------------------------------

/*
In JS objects are variables that has many values.
Thos evalues written as name:value pairs called properties or methods.
*/

//---object Literals--
// comma seperated list of name-value pairs wrapped in curly braces.

var nimal = {
    firstName : 'Nimal',
    lastName : 'Perera',
    age : 24,
    isMarried : false,
    job : 'developer',
    subjects : ['Java programming', 'web development', 'Graphic design', 'database management'],
    degree : {
        name : 'software engineering',
        duration : '4 years',
        credits : 120,
    },
    projects : [

        {name : 'Ecommerce Player',
        technology : 'Flutter',
        version : 1.1,
        },
        {name : 'Music App',
        technology : 'Java',
        version : 1.2,
        },
        {name : 'POS',
        technology : 'C#',
        version : 2.0,
        },
    ],

    yearOfBirth : function(year){
        return year - this.age;
    }
}
//Get values
console.log(nimal);
console.log(nimal.lastName);
console.log(nimal['firstName']);

var x = "age";
console.log(nimal[x]);
console.log(nimal.subjects);
console.log(nimal.subjects[2]);
console.log(nimal['subjects'][3]);

console.log(nimal.degree.name);
console.log(nimal['degree'].duration);
console.log(nimal.subjects);


console.log(nimal.projects[1].technology);
console.log('Year of birth :'+nimal.yearOfBirth(2023));


//modifi values

nimal.job = "Engineer";
nimal.isMarried = true;
console.log(nimal);


//new object syntax
var iresh = new Object();
iresh.firstName = 'iresh';
iresh.lastName ="magage";
iresh['age'] = 22;

console.log(iresh);