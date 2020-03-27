//Looking at the relationship between Async/Await & Promises
/*
 Async/await is wrapping something inside of a promise
 */

dothings();
/*
 1. Here we create an asynchronous function, that then has an await associated to some function
 when in this case has a promise which resolves. And what the await is basically doing is saying,
 okay I'm going to wait for delay to finish i.e. I'm going to wait for the promise to resolve, once
 resolved, the result is passed back and p = result, not a promise
 */
async function dothings() {
    let p = await delay(1000);
    console.log(p);
}

function delay(ms) {
    return new Promise((resolve, reject) =>{
        resolve(ms);
        //reject( new Error('bad things happened'));
        //setTimeout(resolve, ms, 42);
        //setTimeout(reject, ms, new Error("bad things happened"));
    })
}


dothings2();
/*
 2. Instead of running resolve, what happens when it fails?
 We could either call .catch(err => console.log("error:", err.message));...
    A. After the delay method
    B. at the end of the defined promise
 And we would achieve the same result in either case
 */
async function dothings2()//.catch(err => console.log("error:", err.message));
{
    let p = await delay2(1000);
    console.log(p);
}

function delay2(ms) {
    return new Promise((resolve, reject) =>{
        //resolve(ms);
        reject( new Error('bad things happened'));
        //setTimeout(resolve, ms, 42);
        //setTimeout(reject, ms, new Error("bad things happened"));
    })//.catch(err => console.log("error:", err.message));
}