import React, { Component } from 'react';

import User from './user';
import { connect } from 'react-redux'

class Login extends Component {
    render(){
    const { usersIds } = this.props
    return (
      <div>
        <h1>Login:</h1>
       
        <ul>
          {usersIds.map(id =>
          (<li key={id}>
            {<User id={id} />}
          </li>))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps ({ users }) {
  return {
    usersIds: Object.keys(users)
  }
}

export default connect(mapStateToProps)(Login)