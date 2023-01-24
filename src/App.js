import React from "react";

//Linkage to External CSS
import './App.css';
import CustomComponent1, { CustomComponent2 } from "./components(User Defined Components)/CustomComponent";
import FirstComponent from "./components(User Defined Components)/FirstComponent";
import SecondComponent from "./components(User Defined Components)/SecondComponent";
import '../node_modules/bootstrap/dist/css/bootstrap.css';

// Creating image variable
import myphoto from './Images/Formal Photo.jpg'



// React JSX (combination of html and js)
// String JSX
let name = "React Training"

// Integer JSX
let time = 40;

//Boolean JSX
// we have to use conditional statement for this
let join = false;

//Object JSX
let adress = {
    Hno:123,
    city:"Agra",
    state:"UP"
}

//Array JSX
// to traverse array we have a method name map 
// always remember map wants every element to be unique
let array = ["Samarth","Nitya"]

//If there is lot of html code
//() round brackets for multiple elements 

let htmlCode=(
    <>
        <h1>This is an exmaodfnosdjfiodsj</h1>
        <h2>soifnsjvnfoigvjfdmov</h2>
        <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda ab sed, fuga perferendis corrupti obcaecati magnam quisquam atque sunt temporibus aut itaque fugiat possimus vel minima nemo illo aliquam sint est excepturi? Labore ullam nesciunt incidunt aliquam veritatis itaque ut eum necessitatibus, iste cupiditate dignissimos illo hic voluptate inventore eligendi?</h3>
        <a href="https://beta-labs.in">Beta Labs</a>

    </>
)

//Internal Styling

let mystyling = {
    border:'2px solid blue',
    borderRadius: '20px',
    color:'purple',
    fontFamily:'arial',
    padding:'10px 20px',
    margin:'40px'
}



function App(){


        


    // return <h1>This is App Component</h1>
    // we want this componenet to be reuse by other components we add export
    
    
    // if we have to write more than one line of code it will give error ek time par ek hi JSX ko return kar skti hai 
    // if you have to send 2 then 
    return(

        <>
        <FirstComponent/>
        <br/>
        <SecondComponent/>
        <br/>
        <CustomComponent1/>
        <br/>
        <CustomComponent2/>

        
        {/* // <div>
        //     <h1>This is App Component , Line 1 </h1>
        //     <h1>This is App Component , Line 2 </h1>
        // </div>
        // but here we have unnecessary div to avoid this unnecessary div and want more than one elements to return without extra div we use React Fragement

        // <React.Fragment>
        //     <h1>This is App Component , Line 1 </h1>
        //     <h1>This is App Component , Line 2 </h1>
        // </React.Fragment> 

       // <></> this blank statement is also treated as react fragment */}

       
       <div id="centreImage">
       <img src={myphoto} alt=""/>
       </div>







        {/* Simple JSX Expression */} 
        {/* {} is used to execute the code */}

       {2+2}
       <br/>
       {<span style={{color:'red' , fontSize:'30px'}}>{name}</span>}
       <br/>
       Time is equal to {time}
       <br/>
       {join ? "Hello" : "Not Hello"}
       <br/>
       {adress.city}-{adress.Hno}

        {/* Array Acessing */} 

        
        <table border="1">
            <tr>
                {
                    array.map(function(i){
                        return <td key={i} style={mystyling}>{i}</td>
                    })
                }
            </tr>
        </table>
        <br/>
        {htmlCode}
        



       </>
       

    );

}
export default App;
// this means this app component we can use anywhere 