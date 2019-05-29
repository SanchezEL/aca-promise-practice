import React, { Component, Fragment } from 'react'
import { Button } from '@material-ui/core'
import { connect } from 'react-redux'
import {setUsers, getUsersFromAPI} from './actions'

class Users extends Component {
  // state = {
  //   users: []
  // }
  getUsers = () =>{
    this.props.getUsersFromAPI()
  }
  render() {
    return (
      <Fragment>
        <div>
          <h3>Press the button to get users and display them below</h3>
          <Button onClick={this.getUsers} variant="contained" color="primary">Get Users</Button>
        </div>
        <div className="users-block">
          {/* Map through users here */
            this.props.users.map((user) =>(
              <div>
                <p><b>Name: {user.name}</b></p>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>Website: {user.website}</p>
              </div>
            ))
        }
        </div>
      </Fragment>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}
const mapDispatchToProps = dispatch =>{
  return {
    getUsersFromAPI: () => dispatch(getUsersFromAPI())
    // setUsers: (users) => dispatch(setUsers(users))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)