// rfce 
import React from 'react'

function Demo(props) {
    console.log(props);
    
  return (
    <>
    <h1>This is a Demo Page</h1>
    <h1>My name is :{props.xy}</h1>
    <h1>My location is: {props.loc} </h1>
    </>
  )
}

export default Demo