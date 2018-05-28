import React,{Component} from 'react';
import Followers from '../Followers/Followers';

class Battle extends Component {
constructor(props)
{
    super(props);
    this.state={
       user1:this.props.userfirst,
       user2:this.props.usersecond,
   
    }
    
}

render()
{  let score1=this.state.user1.score;
   let score2=this.state.user2.score;


   
    return(
    <div className="SingleLine">
       <div style={{marginLeft:"30%"}}>
         {score1>score2?"Winner":"Losser"}
       <p style={{textDecoration:'bold'}}>@{this.state.user1.login}</p>
        <img src={this.state.user1.avatar_url} width="200px" height="200px" alt=""/>
        <Followers url={this.state.user1.followers_url}/>
       </div>
       <div  style={{marginLeft:"10%"}}>
       {score2>score1?"Winner":"Losser"}
       <p style={{textDecoration:'bold'}}>@{this.state.user2.login}</p>
        <img src={this.state.user2.avatar_url} width="200px" height="200px" alt=""/>
        <Followers url={this.state.user2.followers_url}/>
       </div>
    </div>)
}
}

export default Battle;