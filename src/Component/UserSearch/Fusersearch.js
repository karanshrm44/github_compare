import React,{Component} from 'react';
import axios from 'axios';
import Battle from '../Battle/Battle';

class Fusersearch extends Component {

    constructor(props)
    {
        super(props);
        this.state={
            username1:'',
            isOpen:true,
            obj:{}
        }
    }

    handleClick=()=>{
        axios.get(` https://api.github.com/search/users?q=${this.state.username1}`)
        .then(res=>{
            console.log(res.data.items[0]);
            this.setState({
            isOpen:!this.state.isOpen,
            obj:{...res.data.items[0]}
            }, this.props.drenderFirst(this.state.isOpen) )
           })

    }

    handleChange=(event)=>{
        this.setState({
            username1:event.target.value
        })
    }

    handleReset=()=>{
        this.setState({
            username1:'',
            isOpen:!this.state.isOpen
        })
        
    }

    render(){
       
       if(this.state.isOpen)
       {
        return(
            <div>
             <p>Coder First</p>
             <input type="text" placeholder="Github UserName" value={this.state.username1}
              onChange={this.handleChange}/><br></br>
             <button onClick={this.handleClick}>Submit</button>
             <Battle />
            </div>
        )

     }
      return(
         <div>
            <p>@{this.state.obj.login}</p>
            <img src={this.state.obj.avatar_url} width="200px" height="200px" alt=""/>
            <p onClick={this.handleReset}>Reset</p>
            
         </div>
      )
    }
}


export default Fusersearch;