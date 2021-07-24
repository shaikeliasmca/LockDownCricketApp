import React, { Component } from 'react';
import styles from "./index.module.css";

// Source of code
// https://blog.mycode.website/react-js-add-2-numbers-basic/
class Score extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             score:'',
             totalScore:'0',
             inningsScore:'0',
             balls:'0',
             overs:'0'
        };
    }
    handleSubmit() {
        console.log("score: ", this.state.score, " - totalScore: ", this.state.totalScore)
    this.setState({totalScore: parseInt(this.state.score) + parseInt(this.state.totalScore) })
    console.log(this.state)
      }
      clear() {
        this.setState({score:''});
        this.setState({totalScore:'0'});
        // this.setState({inningsScore:'0'});
        this.setState({balls:'0'});
        this.setState({overs:'0'});
    }
    handleInningsScore() {
    this.setState({inningsScore: parseInt(this.state.totalScore)})
      }
      handleOvers() {
          if(this.state.balls===6){
            this.setState({overs: parseInt(this.state.overs) + 1 });
            this.setState({balls: '0' })
          }else if(this.state.balls>=0||this.state.balls<=6){
    this.setState({balls: parseInt(this.state.balls) + 1 })
          }else{
              alert("Invalid Entry, Enter again btw 1 to 6")
          }
      }
    render() {
        return (
            <div className='mainContainer'>
                <label>Innings Score: </label>
                <input className={styles.inputStyle} type="text" value={this.state.inningsScore} onChange={ (eve) => { this.setState({ inningsScore: eve.target.value }) } }></input>
                <br/><br/><br/>
                <label>Score: </label>
                <input className={styles.inputStyle} type="text" value={this.state.score} onChange={ (eve) => { this.setState({ score: eve.target.value }) } }></input>
                <button onClick={()=>{this.handleSubmit()}}>Enter</button><br/><br/>
                <br/>
                <label>Total Score: </label>
                <input className={styles.outStyle} type="text" value={this.state.totalScore} onChange={ (eve) => { this.setState({ totalScore: eve.target.value }) } }></input>
                <br/><br/><br/>
                <button onClick={()=>{this.clear()}}>Clear ScoreBoard</button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={()=>{this.handleInningsScore()}}>Save Innings</button>

                <br/><br/><br/><br/><br/><br/>
                <label>Overs: </label>
                <input className={styles.inputStyle} type="text" value={this.state.overs} onChange={ (eve) => { this.setState({ overs: eve.target.value }) } }></input>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <label>Balls: </label>
                <input className={styles.inputStyle} type="text" value={this.state.balls} onChange={ (eve) => { this.setState({ balls: eve.target.value }) } }></input>
                <button onClick={()=>{this.handleOvers()}}>GoodBall</button><br/><br/>
            </div>
        )
    }
}

export default Score
