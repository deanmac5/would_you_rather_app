import { Card, CardBody, CardTitle } from 'reactstrap';

import React from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class User extends React.Component {
  
  handleAuthedUser= (e) => {
    e.preventDefault()
    const { dispatch, user } = this.props
    dispatch(setAuthedUser({
      authedUser: user.id
    }))
  }

  render() {
    const { user } = this.props
    return (

        <Card onClick={this.handleAuthedUser}>
        <CardBody>
            <CardTitle>{user.name}</CardTitle>
            <img src={user.avatarURL} alt={`Avatar of ${user.name}`} />
        </CardBody>
    </Card>
    //   <div
    //     className='user'
    //     onClick={this.handleAuthedUser}
    //     >
    //     <img src={user.avatarURL} alt={`Avatar of ${user.name}`} />
    //     <p>{user.name}</p>
    //   </div>
    )
  }
}

function mapStateToProps ({ users, authedUser }, { id }) {
  const user = users[id]
  return {
    authedUser,
    user:user,
  }
}

export default connect(mapStateToProps)(User)