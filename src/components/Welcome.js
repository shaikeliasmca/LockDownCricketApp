// Class Component Example
// More feature rich
// Maintain their own private data -state
// it is for complex UI logic
// Provide lifecyle hook
// Stateful/Smart/Container
import React,{Component} from 'react'

class Welcome extends Component{
    render(){
        return <h1>Welcome {this.props.name}!</h1>
    }
}

// To expose this component to the rest of the application do it as below
export default Welcome
