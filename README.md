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
 Given an object ** obj ** . To iterate through an object and probably separate the keys and the values.
 ```
 for (let [key, value] of Object.entries(obj)) {
        console.log(key , " ", value);
    }
```

    
    
          
