import React, { Component } from 'react';
import './App.css';
import Fusersearch from './Component/UserSearch/Fusersearch';
import Susersearch from './Component/UserSearch/Susersearch';

class App extends Component {
  constructor(){
    super();
    this.state={
      state1:'',                      // Dynamic Rendering for a Battle Button
      state2:'',
      state3:''
    }
  }

  onFusersearch=(val)=>
  { console.log(val);
    this.setState({
      state1:val
    })
    console.log(this.state.state1);
  }

  render() {
    return (
      <div >
        <div className="App">Battle of Glory In coding</div>
        <div className="SingleLine">
            <div style={{marginLeft:"30%"}} ><Fusersearch  drenderFirst={this.onFusersearch} /></div>
            <div style={{marginLeft:"10%"}}><Susersearch /></div>
             
        </div>
      </div>
    );
  }
}

export default App;
