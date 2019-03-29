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



    
    
          
