const myNumbers = [123, "chamu", 75, 100];

//For loop Example 1
console.log("For loop")
for (let i = 0; i < myNumbers.length; i++) {
    console.log(myNumbers[i]);
}
console.log("End of For loop ******")
//forEach Example 2
//one parameter

console.log("The forEach statement")
const forEachArray = myNumbers.forEach(element => console.log(element));

//two parameters
const forIndex = myNumbers.forEach((element, index) => {
    console.log("The element " + element + " is at index " + index);
})

//Three parameters
const forEachIndexArray = myNumbers.forEach((element, index, array) => {
    console.log("The array " + array );
})

//Map helper methods at work example
const postsJSON = [
  '{"postId":1355,"commentsQuantity":5}',
  '{"postId":5131,"commentsQuantity":13}',
  '{"postId":6134,"commentsQuantity":2}'
];

/* From the "postsJSON" array create "posts" array that will consist of JavaScript objects */
const posts = postsJSON.map(JSON.parse);
console.log(posts);

