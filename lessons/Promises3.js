// WORKING WITH PROMISES
/*
 Looking at Promise.all() functionality.
 When you only want your code to run after ALL the promises
 have been resolved.
 EG: useful when fetching remote data from multiple locations.
 */

let p1 = () => Promise.resolve("Got the list of users");
let p2 = () => Promise.resolve("Got the list of tweets");
let p3 = Promise.resolve("Got the weather");

/*
 Promise.all([]) takes an array of promises that have to be met
 Once all the promises have been resolved, the then method gets called
 */
Promise.all([p1(), p2(), p3]).then((resultsArr)=>{
    console.log(resultsArr[1]);
    console.log(resultsArr[0]);
    console.log(resultsArr[2]);
});
