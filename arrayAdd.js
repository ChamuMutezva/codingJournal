//adding to an array
//add at the end
let a = [1, 2, 3];
console.log(a);
a.push(4);
console.log(a);

//add at the beginning
a.unshift(0);
console.log(a);


//Removing an item from an array from the end
a.pop();
console.log(a);

//removing an item from the beginning
a.shift();
console.log(a);


//remove at a random position
console.log("remove at a random position");
let b = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(b);
let getFirst2Items = b.splice(0, 2);// get the first 2 items. 

console.log(b);
console.log(getFirst2Items);
a.splice(3, 2); //get the 2 items starting from index 3
console.log(b);

//remove and insert in place
a.splice(2, 3, 2, a, b); //removes 3 items starting from
//index 2, and adds 2 items still starting from index 2

//join multiple arrays
const z = [1, 2];
const y = [3, 4];
console.log(z.concat(y));

//a.indexOf()
//Returns the index of the first matching item found, or - 1 if not found
//a.lastIndexOf()
//Returns the index of the last matching item found, or - 1 if not found