//Getting the iterator from an array returns an iterator of values
const a = [1, 2, 3];
let it = a[Symbol.iterator]();

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

//.entries() returns an iterator of key/value pairs
let itEntry = a.entries();

console.log(itEntry.next().value);
console.log(itEntry.next().value);
console.log(itEntry.next().value);

// .keys() allows to iterate on the keys;

let itKeys = a.keys();

console.log(itKeys.next().value);
console.log(itKeys.next().value);
console.log(itKeys.next().value);
console.log(itKeys.next());