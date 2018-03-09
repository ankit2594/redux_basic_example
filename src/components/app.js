import React from 'react';
import UserList from '../containers/user_list';
import UserDetail from '../containers/user_detail'
const App=()=>{
    return(
        <div>
        <h1>User List:</h1>
        <UserList/>
        <hr/>
        <h1>User Details:</h1>
        <UserDetail/>
        </div>
    )
}
export default App;