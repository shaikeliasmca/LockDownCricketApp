// JavaScript XML(JSX) - Extension to the JavaScript language syntax
// write XML - like code for elements and components
// JSX tags have a tag name, attribute and children
// JSX makes your react code simpler and elegant
// JSX ultimatly transpiles to pure Javascript which is understood by the browsers
import React from 'react'
const Hello=()=>{
    // return (
    //     <div>
    //         <h1> Hello Elias!</h1>            
    //     </div>
    // )
    return React.createElement('div',{id:'hello',className:'dummyClass'},React.createElement('h1',null,'Howdy Modi!'))
}

export default Hello