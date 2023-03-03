//-------------------------------------------------------
//------------Select & Update DOM elements---------------
//-------------------------------------------------------

//-----Examine the document object-----
console.dir(document);

//get properties
console.log(document.URL);
console.log(document.lastModified);
console.log(document.title);
console.log(document.all);
console.log(document.all[6]);
console.log(document.forms);
console.log(document.links);
console.log(document.title);



//change value
document.title ="Document Object Modeling";
console.log(document.title);

//select elements using id
console.log(document.getElementById("tx"));
var formTitle = document.getElementById("tx");
console.log(formTitle);


//styling
var navigation = document.getElementById('navbar');
navigation.style.backgroundColor = '#888' ;
navigation.style.color = '#fff';

//---select elements using class names---
var itemss = document.getElementsByClassName('items');
console.log(itemss);
console.log(itemss[3]);

itemss[2].textContent = "Hand bag";
itemss[3].innerHTML = "Hand bag"
console.log(itemss[2]);

//styling
itemss[2].style.fontFamily='serif';
itemss[2].style.backgroundColor='#000000';

itemss
//--change background color of all list items
for(var i of itemss){
    i.style.backgroundColor = '#a7520c';
}


//select elemets using tag names--
var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[2].textContent = 'book';

//styling
li[2].style.color = '#333';
li[2].style.backgroundColor = '#555';

//change background color all thr list items
for(var i of li){
    i.style.backgroundColor = '#555'
}

//Query selectors

//ID
var hd = document.querySelector('#navbar');
hd.style.border = 'solid 3px #000';

//tag
var input = document.querySelector('input');
input.style.backgroundColor = '#ebca14';
input.value = 'Paint Bucket';

var opt = document.querySelector('option');
opt.style.backgroundColor = '#ebca14';

//class
var it = document.querySelector('.items');
it.style.backgroundColor= '#ebca14';

//mix selectors
var itt = document.querySelector('div .frm #frmt');
console.log(itt);
itt.style.color = '#ebca14';

//-------------------------------------------------
//-----Select elements using query selector all--
        //the querySelectorAll() method returns all elements in the document that using a specified CSS selector(s), as a static Nodelist object.

//---ID--
var hdr = document.querySelectorAll('#hdt');
console.log(hdr);

//---Tag---
var dv = document.querySelectorAll('div');
console.log(dv);

//--class--
var mx = document.querySelectorAll('.items');
console.log(mx);

//---mix selectors--
var cf = document.querySelectorAll('div .list li');
console.log(cf);

//---pseudo classes-----

var add = document.querySelectorAll('li:nth-child(odd)');
console.log(add);

var add1 = document.querySelectorAll('li:nth-child(even)');
console.log(add1);

var i;
for(i of add){
    i.style.backgroundColor = '#ebca14';
}