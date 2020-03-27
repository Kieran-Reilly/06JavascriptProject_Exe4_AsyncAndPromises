// WORKING WITH PROMISES
/*
 Looking at the different syntax and ways in which you can call resolve/
 reject.
 Also defining Promise as objects, and Promise as functions
 */

let p1 = new Promise((resolve, reject) => {
    if(true){
        resolve('p1 resolved');
    }else{
        reject('p1 rejected');
    }
});

/*
 In the below case, it's the same as p1's resolve being called.
 p2 will then hold the result of the defined promise
 */
let p2 = Promise.resolve('p2 resolved');

/*
 Instead of just promise objects, you can define functions
 */
let p3 = () => Promise.resolve(null);
let p4 = () => Promise.reject("p4 rejected");


/*
 When a promise resolves/rejects, the object/function will hold
 the result, which can then be past to the .then() method for further
 processing.
 */
//obtaining the results
p1.then((result)=>{
    console.log("p1: ", result);
});
p2.then((result)=>{
    console.log("p2: ", result);
});

p3().then((result)=>{
    console.log("p3: ", result);
});
p4().then((result)=>{
    console.log("This won't run because we're calling reject above")
}).catch((result)=>{
   console.log("p4: ", result);
});