//-------------------------------------------------
//-------------Loops------------------------------
//------------------------------------------------


//for loop
var i;   /*we can add var i into the for loop for(var i=0;i<=5;i++); */
for(i=0;i<=5;i++)
{
    console.log('i = '+i);
}

for (var j=5;j>=0;j--)
{
    console.log('j = '+j);
}

//iterate an array
var students = ['namal', 'kumara', 'rajitha', 'shanuka'];

for(var i =0; i< students.length; i++)
{
    console.log('student '+(i+1)+' = '+students[i]);
}

//-------for/In loop-----
var person = {
    fname : 'chamara',
    lname : 'mahage',
    age : 25,
}
var i;
for(i in person){
    console.log(person[i]);
}


//----------for/of loop-------

var fullname = 'chamara perera'
var j;
for(j of fullname)
{
    console.log(j);
}

for(j of students)
{
    console.log(j);
}


//-----------while loop-------------
var marks = [33,55,66,88,22];
var k=0;
while(k < marks.length)
{
    console.log('student '+(k+1)+' marks : '+marks[k]);
    k++;
}

//do-while loop
var l = 10;
do{
    console.log(l);
    l-=2;
}while(l>=0);


//-------------------continue & break-------------------
var data = ['saman', 'galle', 1996, 'maths', true, 'chocolate'];

var i;
for(i=0;i<data.length;i++)
{
    if(typeof(data[i]) != 'string')
    continue;
    console.log(data[i]);
    
    
    
    /*else{
        console.log(data[i]);
    }*/
}


//-----------break------------------
var i;
for(i =0; i<data.length;i++)
{
    if(typeof(data[i]) != 'string')
    break;
    console.log(data[i]);
}