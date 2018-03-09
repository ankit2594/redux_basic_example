import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index'

class UserList extends Component{
  
    createListItem(){
        return(this.props.users.map((eachUser)=>{
            return(
                <li style={{cursor:'pointer'}}key={eachUser.id} onClick={()=>{this.props.selectUser(eachUser)}}>{`${eachUser.first} ${eachUser.last}`}</li>
            )
        }))
    }

    render(){
        return(            
            <ul>
            {this.createListItem()}
            </ul>           
        )
    }
}

function mapStateToProps(state){
   return{users:state.users};
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({selectUser: selectUser},dispatch)

}
export default connect(mapStateToProps, matchDispatchToProps)(UserList);
