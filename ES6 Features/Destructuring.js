// DESTRUCTURING WITH ARRAY
let arr = [2,4,6,8,9,10]
a = arr[0]
b = arr[1]
c = arr[2]
d = arr[3]
e = arr[4]
f = arr[5]
console.log(e)

// We can do all this in one line 
let [A,B,C,D,E,F] = arr
console.log(D)

// saare data ko nhi todna sirf kuch hi karna hai 
let[Z,,,,,L] = arr
console.log(L)

// working with objects 
let person = {
    name:"Samarth",
    age:"21",
    city:"Agra",
    email:"samarthkporwal@gmail.com"
}
console.log(person.city)

// after destructuring we do not need to write the person. again and again
let{name,city} = person
console.log(name)
console.log(city)
