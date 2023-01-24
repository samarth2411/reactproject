// promises are used for Communication with API's 
// It is an object which returns future value but not rigth now 
// Promise has three states 
// 1.) Pending State --> time lag sakta ans dene mei // we can add delay we studied in asnchronus by setTimeout function inside the Promise class and then we can give the delay in timeout 
// 2.) FulFill State --> NHI MILEGA ANS     
// 3.) Reject State --> ANS MIL JAEGA 

// Promise is well suited with Asynchronous operations 

// HOW TO MAKE PROMISE (is a class )
// it is a callback and it will return 2 functions given below
// resolvefunction --> if promise fulfill ; and rejectfunction --> if promise not fulfill 

isCompleted = false
let learnJs = new Promise((resolve,reject)=>{
    if(isCompleted){
        resolve("I Have completed reactjs training")
    }
    else{
        reject("I have not completed reactjs training")
    }
})

// console.log(learnJs);

// NOTE --> Whenever we get promise we have to Consume it properly 
// Lets handle the promise (Consume it properly)
// then promise fullfiled ; catch if promise not fullfilled 

learnJs.then((res)=>console.log(res))
       .catch((err)=>(console.log(err)))


