// write rfc it will create custom component using this by help of extension
// rfc --> Function Component

// import React from 'react'
import React,{Component} from 'react'


export default function CustomComponent1() {
  return (
    <div>
      <h2>This is Function Custom Component Using Extensions</h2>
    </div>
  )
}


// rcc --> for Class Component
// if we want to use more than 1 component then we have to change the name of two components and make default only one 
export class CustomComponent2 extends Component {
  render() {
    return (
      <div>
        <h2 className='text-danger bg-primary'> This is Class Component Using Extensions </h2>
        
      </div>
    )
  }
}

