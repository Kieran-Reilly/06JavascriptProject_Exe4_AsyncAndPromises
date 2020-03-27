//Understanding the difference between Synchronous VS Asynchronous JS
/*
 When you have async, the js is first dealing with all the sync stuff,
 and then the async functions come back
 */

//Sync
let log = console.log;

let a = 5;
let b = 50;

let a1 = function () {return 5};
let b1 = function () {return 50};

log( a1() );
log( b1() );

let a2 = function (num) {
    return 5*num;
};
let b2 = function () {
    return 50;
};
log( a2(b2()));


//Async
let a3 = 100;
setTimeout(function () {a3++}, 0);                          //gets called 4th
log(a3);                                                                    //gets called 1st
setTimeout(function () {log(a3)},0);                        //gets called 5th

let p = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("Resolved");
    },0);
});
log(p);                                                                     //gets called 2nd
setTimeout(function () {                                            //gets called 7th
    log(p);
},10);
log(p);                                                                     //gets called 3rd
p.then(function (result) {
    log(result);                                                            //gets called 6th
});