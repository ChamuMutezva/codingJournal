# codingJournal
Specific notes to assist with my coding journey
# Day 1 Sunday 24 February 2019.
## CSS grid aligning items to the right
Having set the container with the css grid property - 
```
.container {
     display: grid;
     grid-template-columns: 1fr 1fr;
     } 
```
     
There comes a time when you only wants to move one element to the right.
Here is how it can be done:

`#itemToMoveRight { justify-self: end; }`
 # Day 2 Tuesday 5 March 2019
 ## Javascript - indexOf and lastIndexOf 
 indexOf and lastIndexOf can be used for string manipulation
 ### indexOf
    Example `let word = "chamunorwa";  let pos = word.indexOf("a"); `             
 The value of pos will be 2. The indexOf grabs the first occurence(index) of a mentioned string or character.
 Index count start at zero.    
 ### lastIndexOf
    The lastIndexOf grabs the last occurence of a letter or a string.
    `let word = "chamunorwa";    let pos2 = word.lastIndexOf("a");`
    This gives a value of 10.
 # Day 3 - Sunday 10 March 2019
 ## Iterating an object
 Given an object **obj** . To iterate through an object and probably separate the keys and the values.
 ```
 for (let [key, value] of Object.entries(obj)) {
        console.log(key , " ", value);
    }
```
# Day 4 - The Let Syntax
Let is not hoisted, it is attached to the block it is declared, whilst var will be attached to either the function it is declared or Global . See example below.
```
function foo() {
   var bar = "bar";
   for (let i = 0; i < bar.length; i++){
      console.log(bar.charAt(i));
   }
   console.log(i);
}
foo();
```
'let' will be confined in the for loop block only and not the function block as a whole , outside the if block 
`console.log(i)` will produce an "i is undefined" error. If we replace 'let' with 'var' , i will be hoisted to be inclusive in the whole function block.

# Day 5 - Array Helper methods
Friday 29 March 2019
## Traditional Loops.
###  For loop

Consider the following code.
``` const myNumbers = [123, "chamu", 75, 100] ```
To loop over the array  using the for loop , look at the code below.
```
for (let i = 0; i < myNumbers.length; i++) {
   console.log(myNumbers[i]);
}
```
This will print the following values to the console;
123, chamu, 75 and 100.

However there are now new helper methods which came out with advent of es5 and es6.
Among them includes "forEach", Map, reduce,  sort, every, some.

### forEach array helper method.
The above array can also be accessed using the forEach methods.
See the illustration below.
``` const forEachArray = myNumbers.forEach(element => console.log(element)); ```
However the forEach can take a callBack function with three parameters. The last 2 are optional.
The parameters are element, index and array. Below is an example for a forEach with 2 parameters.

```
 const forIndex = myNumbers.forEach((element, index) => {
   console.log("The element " + element + " is at index " + index);
})
```

### Map array helper method.
Used to produce a new array. It accepts a callback function which can take up to
3 parameters (currentValue, index, array). The last 2 parameters are optional.
Map methods creates a brand new array.

Example
```
const myNumbers = [1, 5, 7];
const squareNum = myNumbers.map(element => element * element);
console.log(squareNum);
```
The above code will print an array containing the square numbers of myNumbers
[1, 25 , 49]

### Filter array helper method
Introduced in es5. Produces a brand new array. 
Takes also up to 3 parameters, it is used to find specific data 
of an array.

Example

```
const myNumbers = [10, 25, 56, 100, 5];
```
create an array for numbers that are greater than 10 from the array myNumbers above

```
const filteredNumbers = myNumbers.filter(elem => elem > 10);
console.log(filteredNumbers) // 25, 25, 100
```

### find array helper method
Similar to Filter. Find retains element or undefined if no matching element is found
Find will break its execution once a matching element is found.

```
const myArray = [10, [], {}, "abc", true, 15];

const result = myArray.find(element => typeof element === "boolean");

console.log(result)
```
`true` will be printed to the console.

### every array helper method
Takes a callback function with upto 3 parameters. First parameter is mandatory
Callback function may return true all false. Used to check elements in an array
if they contain the same characteristics.

### some helper method
Takes a callback functions with upto 3 parameters like the above other methods
Return true if any of the elements in the array has the required characteristics.

//Example 1 
Check if the array contains positive numbers
```
const myNumbers = [3, -5, 1, 10, -7];
const isPositiveNum = element => typeof element === "number" && element > 0;

const everyMethod = myNumbers.every(isPositiveNum);
const someMethod = myNumbers.some(isPositiveNum);
```
Result will be `false` for the everyMethod function and will be `true` for someMethod.

### includes helper method
does not require callback function, it accepts 2 arguments (searchElememt and optional starting index).
loops thru all elements in the array and compares it to the searchElement. If a 
match is found it will return true otherwise it returns false. Works perfectly with primitive types

Example 
```
const myArray = [10, 'abc', true, undefined, null, [1,2]];
console.log(myArray.includes(true));
console.log(myArray.includes(10));

```
### reduce helper method
Loops thru elements of array. It reduces an array to one value. It takes 
up to 4 arguments, (accumulator ,currentValue, index, array).

Example 1
Sum of numbers
```
const myNumbers = [5, 10, 3, 15];
const sum = arrayOfNumbers =>
arrayOfNumbers.reduce((accumulator, number) => accumulator + number, 0);

console.log(sum(myNumbers)).
```

Example 2
```
const persons = [
    {
      name: "veronica",
      age: 25
      },

      {
        name: "John",
        age: 21
        },

        {
          name:  "chamu",
          age: 27
        }

        ];
        const personNames = arrayOfPersons => 
        arrayOfPersons.reduce(
          (names, person) => {
            names.push(person.name);
            return names;
            }, []);

 console.log(personsNames(persons));
 ```
 
 # Semantic Elements
 ## Open attribute
 When the `open` attribute is appended to a semantic element which has a list of elements,
 the elements will be visible by default. Clicking on the arrow will close the list and open again 
 when clicked. It can be used by the new `details` semantic element
 
 
 # Set Max width to body for bigger screens
## Bigger screens eg - TV Screens
```
@media screen and (min-width: 1450px) {
    body {
        margin: 0 auto;
        width: 95%;
        max-width: 1240px;
    }
}
```





    
    
          
