import React from 'react';
// This Library is used to create react element like JSX
import ReactDOM from 'react-dom/client';
// This Library is used to render react element i.e. display the react element we made above


// Note -> we have used jsx here but not used react becoz react is not understandable by browser and our browser are only available to understand ES5 but JSX is ES6 concept so we use Bable 
// Bable -> convert ES6 code to ES5 so Bable(also called transpilir) will convert React code to ES5
// suppose we write ES5 code of JSX then it will be far difficult 
// eg-> of ES5 code of JSX
// let element = React.createElement("h1","null","Welcome to our page");


// storing html into a variable is JSX
// JSX
// let element = <h1>Welcome to our page</h1>;
import App from './App'

// Rendring
// old version
// ReactDOM.render(element,document.getElementById('root'))

// new Version 
// in 18 version write like
const root = ReactDOM.createRoot(document.getElementById('root'));
// the root here is refering(pointing) to the root in index.html in public folder

// before rendering this import the component
root.render(<App />);

// In react we can make 2 types of component function component and class component 


