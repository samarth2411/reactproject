// Simple Es5 function 

//Normal function
function add(a,b){
    return a+b
}
console.log(add(5,10));

// Expression function | variable invoking function | anaonymous function
// anonymous function are those function which do not have any name 
// example of anonymous function
var sum = function(a,b){
    return a+b
}; // in front of variable we use semicolon
console.log(sum(20,30))


//ES6 Arrow Function
let sum1 = (a,b)=>{
    return a+b
}
console.log(sum1(20,20));

// when we have only one line of code inside the function we can remove brackets also and if return is ther we can remove return also

let h =()=>console.log("One Line Arrow Function")
// calling function h 
h();
