import React from 'react'

export default function Message(props) {
  return (
    <div className='container'>{

        // props cannot be changed

    //   {/* <h1 className='bg-primary text-white p-2 text-center'>Welcome {props.name} your age is {props.age}</h1> */}

      props.arrayName.map(function(i){
        return <li className='bg-primary text-center text-white m-2 p-2'>{i}</li>
      })
    
    }
    </div>
  )
}
