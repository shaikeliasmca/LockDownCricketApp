import React,{Component} from 'react'

class Message extends Component{
    constructor(){
        super()
        this.state={
            message:'Welcome Visitor!'
        }
    }
    changeMessage(){
        this.setState(
            {
                message:"huuuuuu Don't toch me........."
            }
        )
    }
    render(){
        return(
<div>
    <h1>{this.state.message}</h1>
    <button onClick={() => this.changeMessage()}>Subscribe</button>
</div>
        ) 
    }
}

// To expose this component to the rest of the application do it as below
export default Message
