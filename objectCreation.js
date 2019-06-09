//To create a new, blank (i.e., “empty”) object, 
//you can use object literal notation, or the Object() constructor function.

//Method 1 : Using literal notation:

const myObject = {};

//Method 2 : Using the Object() constructor function:

const myObject2 = new Object();
//Keep in mind that data within objects are mutable, meaning that data can be changed. 

const cat = {
    age: 2,
    name: 'Bailey',
    meow: function () {
        console.log('Meow!');
    },
    greet: function (name) {
        console.log(`Hello ${this.name}`);
    }
};

cat.age += 1;
cat.age;
// 3

cat.name = 'Bambi';
//cat.name;
cat.greet();

//Passing Arguments
//Passing a Primitive
//In JavaScript, a primitive(e.g., a string, number, boolean, etc.) 
//is immutable.In other words, any changes made to an argument inside 
// a function effectively creates a copy local to that function, 
//and does not affect the primitive outside of that function.Check out the following example:

function changeToEight(n) {
    n = 8; // whatever n was, it is now 8... but only in this function!
};
let n = 7;
changeToEight(n);
console.log(n);
// 7

//Passing an Object
//On the other hand, objects in JavaScript are mutable.
//If you pass an object into a function, Javascript passes a 
// reference to that object.Let's see what happens if we pass an 
// object into a function and then modify a property:
let originalObject = {
    favoriteColor: 'red'
};

function setToBlue(object) {
    object.favoriteColor = 'blue';
}

setToBlue(originalObject);
originalObject.favoriteColor;
// 'blue'