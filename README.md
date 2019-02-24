# codingJournal
Specific notes to assist with my coding journey
# Day 1 Sunday 24 February 2019.
## CSS grid aligning items to the right
Having set the container with the css grid property - 
`.container {
     display: grid;
     grid-template-columns: 1fr 1fr;
     } `
There comes a time when you only wants to move one element to the right.
Here is how todo it:
` #itemToMoveRight {
    justify-self: end;
    }`
          
