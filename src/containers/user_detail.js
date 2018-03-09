import React, { Component } from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component{
    render(){
        console.log(this.props.user);
        if(!this.props.user)
        {
                return (<h4>select a user</h4>)
        }
        return(
            <div>
            Age:{this.props.user.age}
            </div>
        )
    }
}

function mapStateToProps(state){
    return{user:state.activeUser};
 }
 export default connect(mapStateToProps)(UserDetail);