//---------------JS-Events-----------------

/*
    An HTML event can be something the browser does , or something a user does.

    here are some examples HTML events
    1.An HTML web page has finished loading
    2.An HTML input field was changed
    3.An HTML button was clicked

    often when events happen you may want to do something.
    JS lets you execute code when events are detected.
*/

//Using Internal Events------
//Html allows event handler atributes , with JS code, to be added to HTML elements.
//<element event = 'some JS>

function btnClick(x){
    alert(x);
}

//------------Using element Listners--------------


//--intergrsted function----
var button1 = document.getElementById('c-btn').addEventListener('click',function(){
    alert('Button clicked');
});


//---------------------------------------------------




//--Named function--
document.getElementById('c-btn').addEventListener('mouseout',txtchange);

function txtchange(){
    alert("Mouse out!");
    document.getElementById('hdt').textContent="mouse out";
}

document.getElementById('c-btn').addEventListener('mouseover',textc);

function textc(){
    alert('Mouse over');
}


//-----------------------------------------------------


//-------Parameterize function------------
document.getElementById('i-btn').addEventListener('click',function(){
    changelistBack("hello!");
});

function changelistBack(x){
    document.getElementById('li-items').style.backgroundColor = '#ebca14';
    document.getElementById('li-items').firstElementChild.textContent=x;
};


//-----------------------------------------------------
//--Event parameter--

var button2 = document.getElementById('e-btn').addEventListener('click',clickbtn);

function clickbtn(e){
    console.log(e);
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.classList);
    console.log(e.target.type);
    console.log(e.type);

    //output
    var output = document.getElementById('output');
    output.innerHTML = '<h4>Class name : '+e.target.classList[0]+'</h4>';

    //clicking position
    console.log(e.clientX);
    console.log(e.clientY);

    console.log(e.offsetX);
    console.log(e.offsetY);

    //check key press
    console.log(e.altKey);
};

//-----------------------------------------------------

//----bubleing and capturing---

//bubling
document.getElementById('myP1').addEventListener('click',function(){
    alert("You click the white element");
},false);

document.getElementById('mydiv1').addEventListener('click',function(){
    alert("You click the coral element");
},false);


//capturing
document.getElementById('myP2').addEventListener('click',function(){
    alert("You click the white element");
},true);

document.getElementById('mydiv2').addEventListener('click',function(){
    alert("You click the coral element");
},true);


//remove event listner
function myFunc(){
    alert("Button has clicked");
};

//add
document.getElementById('ev-btn').addEventListener('click', myFunc);

//remove
document.getElementById('rm-btn').addEventListener('click', function(){
    document.getElementById('ev-btn').removeEventListener('click', myFunc);
    console.log("Event has removed");
});


//----------------------------------------------------

//---Different types of events for mouse----

var btn =  document.getElementById('t-btn');

//btn.addEventListener('click', typeOfEvent1);
//btn.addEventListener('dblclick', typeOfEvent1);
//btn.addEventListener('mousedown', typeOfEvent1);
//btn.addEventListener('mouseup', typeOfEvent1);

//btn.addEventListener('mouseenter', typeOfEvent1);
//btn.addEventListener('mouseleave', typeOfEvent1);

//btn.addEventListener('mouseover', typeOfEvent1);
//btn.addEventListener('mouseout', typeOfEvent1);
btn.addEventListener('mousemove', typeOfEvent1);

function typeOfEvent1(e){
        console.log('Event type : '+e.type);


};

//--------------------------------------------------------


//--Different types of events for keyboard---

/*var keyInput = document.querySelector('input[type="text]');

keyInput.addEventListener('keydown', typeOfEvent2);

function typeOfEvent2(e){
    console.log('Event type : '+e.type);
    console.log('value : '+e.target.value);
    document.getElementById('out').textContent = e.target.value;
}*/


//---------Other different type of event----
var select = document.querySelector('select');

//select.addEventListener('change', typeOfEvent3);
select.addEventListener('input', typeOfEvent3);

function typeOfEvent3(e){
    console.log('Event type : '+e.type);
}


//form
var form = document.querySelector('form');

form.addEventListener('submit', typeOfEvent4);

function typeOfEvent4(e){
    e.preventDefault();  //should add this otherwise refresh the page when submitting
    console.log("Event type : "+e.type);
}