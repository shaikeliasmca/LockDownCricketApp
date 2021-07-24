// Functional component example
// it is simple function
// try to use functional component
// Use it in the absence of this keyword
// Stateless component
import React from 'react'

// function Greet(){
//     return <h1> Hello Elias! </h1>
// }

// Use Arrow fuctions instead as below
const Greet=(props)=>{
console.log(props)
return <h1>Hello {props.name}</h1>
}
//To connect this js file to the rest of the application export this component as below
export default Greet