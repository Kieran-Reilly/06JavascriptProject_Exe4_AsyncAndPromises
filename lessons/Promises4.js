// WORKING WITH PROMISES
/*
 Promise.race()
 When you want the result of the first resolved promise
 */

let p1 = Promise.reject(111);
let p2 = Promise.resolve(222);
let p3 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 1000, 333);
});

/*
 Promise.race([]) takes an array of promises and fires them off
 The first one to return a result (either successfully or unsuccessfully
 in this case) will be called.
 Useful when you're fetching resources from various places, or making
 a number of async calls and you don't know which will return first
 but you'll just use whichever result returns
 */
Promise.race([p3, p2, p1])
    .then((result) => {
        console.log("winning: ", result);
})
    .catch((result) => {
        console.log("failed: ", result);
});