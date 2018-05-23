import React,{Component} from 'react';
import axios from 'axios';

class Susersearch extends Component {

    constructor(props)
    {
        super(props);
        this.state={
            username2:'',
            isOpen:true,
            obj:{}
        }
    }
    handleChange=(event)=>{
        this.setState({
            username2:event.target.value
        })
    }

    handleClick=()=>{
        axios.get(` https://api.github.com/search/users?q=${this.state.username2}`)
        .then(res=>{
             this.setState({
                 isOpen:!this.state.isOpen,
                 obj:{...res.data.items[0]}
             })
        })
    }

    handleReset=()=>{
        this.setState({
            isOpen:!this.state.isOpen,
            username2:''
        })
    }

    render(){
        
        if(this.state.isOpen)
        {
        return(
            <div>
             <p>Coder  Second</p>
             <input type="text" placeholder="Github UserName" value={this.state.username2}
              onChange={this.handleChange}/><br></br>
             <button onClick={this.handleClick}>Submit</button>
            </div>
        ) }
        
        return(<div>
            <img src={this.state.obj.avatar_url} />
            <p onClick={this.handleReset}>Reset</p>
        </div>)


    }
}


export default Susersearch;