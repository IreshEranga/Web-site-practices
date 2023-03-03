//-------------------Traversing the DOM--------------
//---------------------------------------------------

var itemList = document.querySelector('#li-items');

//----Parent Node---
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#afafaf';
console.log(itemList.parentNode.parentNode);

//---Parent element----
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor='#6f6f6f';
console.log(itemList.parentElement.parentElement);

//-child nodes
console.log(itemList.childNodes);

//---children---
console.log(itemList.children);
console.log(itemList.children[2].textContent);


//----------------------------------------------


//-------First child------------
//work like node list
console.log(itemList.firstChild);

//------First element child---------
console.log(itemList.firstElementChild);

//last element child
console.log(itemList.lastElementChild);

//-----------Next sibling-------------
console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);
itemList.nextElementSibling.style.backgroundColor = '#ebca14';


//--------------------------------------------------------


//--------create an element

//create an input
var input = document.createElement('input');

//add class
input.className = 'test';

//add ID
input.id = 'ire';

//add an atribute
input.setAttribute('type','text');
console.log(input);

//-------Create a div --------
var newDiv = document.createElement('div');

//create text node
var newText = document.createTextNode("How are You?");

//Add text to div
newDiv.appendChild(newText);
console.log(newDiv);

//---Insert created elements to the HTMl doc----

var form = document.querySelector('.frm form');
var button = document.querySelector('.frm form button');

input.style.backgroundColor = '#afafaf';

form.insertBefore(input,button);