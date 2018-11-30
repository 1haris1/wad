/*function  showAlertBox() {
    alert("Display Message")
}*/


/*
function  displayName(name) {
    alert("My Name is " + name);
}
*/
/* Parameter vs Argument */
/*function  show Message() {
    console.log("A message to the console");
}*/


/*function sum() {
    var n1 = 5;
    var n2 = 3;
    var sum = n1 + n2;
    alert("Sum is "+ sum);
}*/


/*function multiply(a,b) {
    var result = a * b;
    alert("Result: " + result);
}*/

/*
expo();
function expo() {
    var a = 2;
    //a = a**3;
    a = Math.pow(a,5)
    alert(typeof a);
    alert(a);
}
*/
//global Var
var category = "electronics";
//dt();
function dt() {
    //local variable
    var length = 16;                               // Number
    var lastName = "Johnson";                      // String
    var a;                                          // Now x is undefined
    var x = {firstName:"John", lastName:"Doe"};    // Object
    var y = 16 + 4 + "Volvo";
    var z = "Volvo" + 16 + 4;
    var cars = ["Saab","Volvo","BMW"];
    console.log("My fav Car is " + cars[2]);
    var person = {
        firstName : "John",
        lastName  : "Doe",
        age       : 50,
        eyeColor  : "blue"
    };

    console.log(person.firstName + " is " + person.age + " years old.");

    console.log(typeof "John");              // Returns "string"
    console.log(typeof 3.14);                // Returns "number"
    console.log(typeof true);               // Returns "boolean"
    console.log(typeof false);              // Returns "boolean"
    var j;
    console.log(typeof j)                   // Returns "undefined" (if x has no value)
    console.log(typeof {name:'john', age:34});  // Returns "Object"
    console.log(typeof [1,2,3,4]);              // Returns "Object"
    console.log(typeof null);                    // Returns "Object"
    console.log(typeof function myFunc(){});        // Returns "function"
}

//dayOfTheWeek();
function dayOfTheWeek() {
    var day;
    switch (new Date().getDay()) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
    }
    console.log("Today is " + day);
}

//objectTesting();
function objectTesting() {
    var person = {
        firstName: "John",
        lastName : "Doe",
        id       : 5566,
        fullName : function() {
            return this.firstName + " " + this.lastName;
        }
    };
    console.log(person.firstName);
    console.log(person['id']);
    console.log(person.fullName());
}
