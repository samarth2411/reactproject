// let and const are used to create variables in ES6
// var keyword to create variable in ES5

// We have 3 scopes 
// 1.) Global 
// 2.) Function
// 3.) Block Scope ES6 using let keyword

var age = 30 // this is global variable 

function sayHi(){
    if(true){

        let msg = "This is a let message"
        console.log(msg)

        const sam = "const variable data cannot be updated further"
        console.log(sam)
        //const variable data cannot be updated further
        sam = 10

        var message = "Welcome"
        console.log(message)
        // the scope of var is function scope it can be access from anywhere inside the function 
    }
    // so there is a problem in es5 that we can change its value anywhere inside the function this problem was resolved by let(it is a block variable) it will only be available inside the block it is declared 
    message = "I can still update this outside if block"
    console.log(message)

    // here it is by-default considering it as var
    msg = "it is a let variable we cannot change it outside the block it is declared in"
    console.log(msg) // until we itnitialie the let variable again it will not be acccessable outside the block it is declared in 

    console.log(sam)
}

// console.log(message) // not run here 

console.log(age) // can run here because global scope 

sayHi()