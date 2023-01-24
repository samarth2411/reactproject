// Synchronus and Asynchronous 
// Synchronous --> Code executes top to bottom 
// Beahviour of javascript is Synchronus 

console.log("Statement-1")
console.log("Statement-2")

var result = 0;
for(let i=0;i<10000000000;i++){
    result +=1; // as this is the time consuming task the last 3 statements will take time to execute 
}
console.log(result)

console.log("Statement-3")
console.log("Statement-4")
console.log("Statement-5")

// Introducing Asnchronous

console.log("Statement-6")
console.log("Statement-7")

setTimeout(() => {  // Also a callback function 
    var result1 = 0;
    for(let i=0;i<10000000000;i++){
        result1 +=1; 
    }
    console.log(result1)

    
},timeout); // in place of timeout we can give time if we give time here suppose 3000ms then the task inside the timeout will be executed after 3 sec 



console.log("Statement-8")
console.log("Statement-9")

// so to exectute this tasks in the background as these tasks are very less time consuming we can exectue these tasks in the backgoround i.e asnchronously In ES6 we indroduced ( Asnchronous --> used to execute the task baar baar )

// 3 Functions contain callback which execute in the background

// a.) setInterval(() => {
    
// }, interval);

// b.) setTimeout(() => {
    
// }, timeout);


//Callback Function -->  Making function inside a function is called callback function 