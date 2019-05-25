#Promises
Are becoming the standard way to handle asynchronous functions in javascript
##Creating a new Promise
Sample code
```
var promise = new Promise(function(resolve, reject) {

    //do stuff

    var isSuccessful = true;

    if (isSuccessful) { /*if everything is successful*/
        resolve("Success!");
    }
    else {              /*if something went wrong*/
        reject(Error("Failure."));
    }
});

```

### new Promise()
The new Promise() constructor is called to create a new promise. The constructor takes in a callback function with the arguments resolve and reject.

### Resolve()

The resolve() function is used to change the status of the promise from pending to fulfilled. The value that is passed inside the resolve() function becomes the fulfillment value of the promise.

Once the resolve() function is called, future resolve() and reject() calls no longer have any effect.

### Reject()

The reject() function is used to change the status of the promise from pending to rejected. The value that is passed inside the reject() function becomes the rejection value of the promise.

Once the reject() function is called, future resolve() and reject() calls no longer have any effect.

The resolve function can take in any object as an argument, but one common practice is to pass in a Error object because it provides a more detailed error report. 

### Promise.resolve() and Promise.reject()
Promise.resolve() is used to return a promise that is already fulfilled. Likewise, the Promise.reject() method may be used to return an already rejected promise. Both of these methods can be called outside of the new Promise() constructor.

### Using Promises with Then() and Catch()
The then() and catch() methods are used to handle the results of Promises once they have finished pending. The then() method is used to handle resolved Promises while the catch() method is used to handle rejected Promises. Both of the methods use callback functions. The callback functions should each have one argument representing the Promise result.