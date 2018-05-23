import React, { Component } from 'react';
import './App.css';
import Fusersearch from './Component/UserSearch/Fusersearch';
import Susersearch from './Component/UserSearch/Susersearch';

class App extends Component {
  render() {
    return (
      <div >
       
       <div className="App">Battle of Glory In coding</div>
       <div className="SingleLine">
         <div style={{marginLeft:"30%"}}><Fusersearch /></div>
         <div style={{marginLeft:"10%"}}><Susersearch /></div>
       </div>
      </div>
    );
  }
}

export default App;
