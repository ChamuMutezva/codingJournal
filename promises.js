//understanding promises 
var promise = new Promise(function (resolve, reject) {
    //do stuff here
    var isSuccessful = false;
    setTimeout(function () {
        if (isSuccessful) { //if everything is successful
            resolve("Success!");
        }
        else { //if something went wrong
            reject(Error("Failure."));
        }
    }, 5000);

});

promise.then(function (val) {
    console.log(val);
}).catch(function (val) {
    console.log(val);
})