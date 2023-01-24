// Custom Component using Class cannot directly render the component use render method 

import React,{Component} from "react";

export default class SecondComponent extends React.Component{

    render(){ // this method helps to render a single JSX 
        return(
            <>
                <h2>This is Second Component</h2>
                <h3>Using React Class</h3>
            </>
        )
    }

}

