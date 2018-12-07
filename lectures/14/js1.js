/*const key = 'abc123';
let points = 50;
let winner = false;

let points = 60;*/


/*
const key = 'abc123';
let points = 50;
let winner = false;

if(points > 40) {
    let winner = true
}
console.log(winner);*/


/*const key = 'abc123';
let points = 50;
let winner = false;

points = 60;
console.log(points);*/


/*const key = 'abc123';
let points = 50;
let winner = false;

key = 'abc1234';*/


/*const person = {
    name: 'Wes',
    age: 28
}

person.name= 'Wesley';
person.address= '123';
console.log(person);*/

/*person = {
    name: 'ali'
}*/


/*
const wes = Object.freeze(person);
wes.address= '789';
console.log(wes);*/


/*getValue();
function getValue() {
    if (1===1) {
        let value = "blue";
        // other code
        return value;
    } else {
        // value doesn't exist here
        console.log(value);
        return null;
    }
    // value doesn't exist here
    console.log(value);
}*/


/*// Valid constant
const maxItems = 30;
// Syntax error: missing initialization
const name;*/



/*if({ name: 'ali' } === { name: 'ali' }){
    alert('equal');
} else{
    alert('not equal');
}*/


/*
var a = {
    myFunction: function quiz() { console.log('hi'); }
};
var b = {
    myFunction: function quiz() { console.log('hi'); }
};


if(a.myFunction === b.myFunction){
    alert('equal');
} else{
    alert('not equal');
}*/



/*
function quiz() {
    return 'a';
}

var a = {
    myFunction: quiz
};
var b = {
    myFunction: quiz
}

if(a.myFunction === b.myFunction){
    alert('equal');
} else{
    alert('not equal');
}*/



/*function myEventListeningFunction() {
    console.log('howdy');
}

// adds a listener for clicks, to run the `myEventListeningFunction` function
document.addEventListener('click', myEventListeningFunction);

// immediately removes the click listener that should run the `myEventListeningFunction` function
document.removeEventListener('click', myEventListeningFunction);*/




/*// adds a listener for clicks, to run the `myEventListeningFunction` function
document.addEventListener('click', function myEventListeningFunction() {
    console.log('howdy');
});

// immediately removes the click listener that should run the `myEventListeningFunction` function
document.removeEventListener('click', function myEventListeningFunction() {
    console.log('howdy');
});*/





/*const myCustomDiv = document.createElement('div');

for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;

    newElement.addEventListener('click', function respondToTheClick() {
        console.log('A paragraph was clicked.');
    });

    myCustomDiv.appendChild(newElement);
}

document.body.appendChild(myCustomDiv);*/





/*
const myCustomDiv = document.createElement('div');

function respondToTheClick() {
    console.log('A paragraph was clicked.');
}

for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;

    newElement.addEventListener('click', respondToTheClick);

    myCustomDiv.appendChild(newElement);
}

document.body.appendChild(myCustomDiv);*/


/*const myCustomDiv = document.createElement('div');

function respondToTheClick() {
    console.log('A paragraph was clicked.');
}

for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;

    myCustomDiv.appendChild(newElement);
}

myCustomDiv.addEventListener('click', respondToTheClick);

document.body.appendChild(myCustomDiv);*/
