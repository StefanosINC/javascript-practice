// let means yo ucan change it

// primitive data types
const no = false;
const yes = true;
const count = 9;
const strings = 'abc'; 
const color = 'Yellow';



let score = 0;
score = 10;

// opening an object and inserting something inside
// comma is the new semi colon.
// Instead of = sign it is : :
// copmlex data types ( groups)
const object = {
    no : false,
    yes: true,
    number: 1, 
    strings: 'abc',
    favoriteFoods: ['Pizza', 'Burgers'],
}
const array = [false, true, 1, 'abc', object, object.favoriteFoods];
// references the specific part of the object

// dot notation
console.log(object.number);

// backet notation consle logging to print. 
console.log(object['favoriteFoods']);

// start at 3 and end at 4. (Does not include)
console.log(array.slice(3,4));

// backet notation
console.log(array[3]);



// named function syntax 
function setupH1(){
// ways they interact with the HTML.
// ----------------------------------------
let h1 = document.body.children[0];
h1 = document.querySelector('.title');

h1.style.color = color;

h1.innerHTML = 'Intro to Cool Websites that do things';

h1.classList.add('active')
console.log(h1);

// click listener
h1.addEventListener('click', addTwoClick);
}


// call the method
setupH1();
// yes

let howManyClicks=0;

function addAClick(){
     // make it increase by 1 every time this  happens
    howManyClicks += 1;
    console.log(howManyClicks);
}
function addTwoClick(){
    howManyClicks += 2;
    console.log(howManyClicks);
}
////////////////////////////////////////////////////////
let Person = {
    firstName : 'John',
    lastName : 'Doe',

};
// Set a click listener to appear something.

