import React, { Component } from 'react';
import './App.css';
import Fusersearch from './Component/UserSearch/Fusersearch';
import Susersearch from './Component/UserSearch/Susersearch';
import Battle from './Component/Battle/Battle';

class App extends Component {
  constructor(){
    super();
    this.state={
      state1:'',                  // Dynamic Rendering for a Battle Button
      state2:'',
      state3:true,
      userfirstdetail:'',
      userseconddetail:''
    }
  }

  onFusersearch=(val,obj)=>
  { console.log(val);
    this.setState({
      state1:val,
      userfirstdetail:obj
    },()=>{console.log(this.state.state1,this.state.userfirstdetail)})
  }

  onSusersearch=(val,obj)=>
  { console.log(val);
    this.setState({
      state2:val,
      userseconddetail:obj
    })
  }

 handleClick=()=>{
   this.setState({
     state3:!this.state.state3
   })
 }

  render() {
    let show=null;
    if(this.state.state1===false && this.state.state2===false)
    {
      show=<button onClick={this.handleClick}>Battle Begin</button>
    }
    
    if(this.state.state3)
    return (
      <div >
        <div className="App">Battle of Glory In coding</div>
        <div className="SingleLine">
            <div style={{marginLeft:"30%"}} ><Fusersearch  drenderFirst={this.onFusersearch} /></div>
            <div style={{marginLeft:"10%"}}><Susersearch   drenderSecond={this.onSusersearch}/></div>
        </div>
        {show}
      </div>
    );
    else
    { return(<div>
      <Battle userfirst={this.state.userfirstdetail} usersecond={this.state.userseconddetail} />
    </div>)
    
    }
  
  }
}

export default App;
