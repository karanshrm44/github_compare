import React,{Component} from 'react';
import axios from 'axios';

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
            })
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
            </div>
        )

     }
      return(
         <div>
            <img src={this.state.obj.avatar_url} />
            <p onClick={this.handleReset}>Reset</p>
            
         </div>
      )
    }
}


export default Fusersearch;