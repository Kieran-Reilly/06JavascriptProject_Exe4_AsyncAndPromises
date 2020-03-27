// WORKING WITH PROMISES
/*
Think of a making a promise IRL. You're asking the JS engine
for a promise: can you do this for me? JS engine replies: yes
I'll give you an answer yes/no
*
When working with promises, you usually want to wrap an async
function. It doesn't need to be async, but usually it is.
*
There are two internally defined callback functions:
	1: Successful Promise callback function
		resolve()
	2: Unsuccessful Promise callback function
		reject()
*
then() method:
	takes the response from the promise
*/
let p1 = new Promise((resolve, reject) => {
    let x = 5;
    //resolve(x);			//will call then() giving it 5
    //reject(x);			//call the caught() giving it 5
    let number = Math.floor((Math.random()*100)+1);
    setTimeout(resolve, 1500, number);
});

/*
.then() method gets called when the promise has resolved.
Whatever gets resolved is passed to the then method.
We can return something within the then() method, in this case
we're returning the value 5.
We can also chain the functions, and in this case we're handing
the next then() method with the previously returned 5.
If the promise p1 fails, the catch() method runs or if any of the
then() methods fail.
*/
p1.then((ex) =>{
    console.log(ex);
    return ex * 2;
}).then((x) =>{
    console.log(x);
}).catch((val) => {
    console.log('caught: ', val);
});