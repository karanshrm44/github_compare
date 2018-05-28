import React,{Component} from 'react';
import axios from 'axios';

class Followers extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            arr:''
        }
    }
    componentDidMount=()=>{
        axios.get(`${this.props.url}`)
        .then(res=>{
            this.setState({
                arr:res.data.length
            })
            console.log(res);
            console.log(this.state.arr);
        })
    }
    render(){
        console.log(this.state.arr);
        return(
            <div>
             Followers:{this.state.arr}
            </div>
        )
    }
}

export default Followers;