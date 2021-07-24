import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import React, { Component } from 'react';
import Counter from './components/Counter';
import NameList from './components/NameList';
import DragAndDrop from './components/DragAndDrop';
import FragmentDemo from './components/FragmentDemo';
import Score from './components/Score';
class App extends Component{
  render(){
    return(
      <div className='App'>
        <FragmentDemo/>
        {/* <Welcome name="Kishore"/>
        <Welcome name="Prasad"/>
        <Greet name="Mahesh"/>
        <Message />
        <Counter/> */}
        {/* <NameList/> */}
        {/* <DragAndDrop/> */}
        <Score/>
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <Greet/>
//       <Greet/>
//       <Greet/>
//       {/* <Welcome/> */}
//       {/* <Hello/> */}
//     </div>
//   );
// }

export default App;
