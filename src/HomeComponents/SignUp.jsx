import React, {Component} from 'react';
import { Form, Button, Modal } from 'semantic-ui-react'

class SignUp extends Component {

  state = {
    username: "",
    bio:"",
    picture:"",
    password:"",
    error: ""
  }

  handleAllChange=(evt)=>{
    let {value, name} = evt.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    fetch('https://traveladvisor-api.herokuapp.com/users', {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(this.state)
    })
    .then(r => r.json())
    .then(newUser => {
      if(newUser.error){
        this.setState({
          error: newUser.error
        })
      }else{
        localStorage.setItem("token", newUser.token)
        this.props.createNewUser(newUser)
        this.props.history.push("/")
        this.setState({
          error: ""
        })
      }
    })
  }

  render() {
    return (
      <div>
        <Modal.Header className="sign-up-login-form-header">Sign up</Modal.Header>
        <Modal.Description>
          <Form className="sign-up-login-form" onSubmit={this.handleSubmit}>
            <Form.Field>
              <label className="sign-up-login-label"><b>Username</b></label>
              <Form.Input
                icon='user'
                iconPosition='left'
                className="sign-up-login-input"
                type="username"
                placeholder="Username"
                name="username"
                value={this.state.username}
                onChange={this.handleAllChange}
              />
              <label className="sign-up-login-label"><b>Bio</b></label>
              <Form.Input
                icon='user'
                iconPosition='left'
                className="sign-up-login-input"
                type="bio"
                placeholder="Enter bio"
                name="bio"
                value={this.state.bio}
                onChange={this.handleAllChange}
              />

              <label className="sign-up-login-label"><b>Picture</b></label>
              <Form.Input
                icon='file image'
                iconPosition='left'
                className="sign-up-login-input"
                type="picture"
                placeholder="Picture"
                name="picture"
                value={this.state.picture}
                onChange={this.handleAllChange}
              />

              <label className="sign-up-login-label"><b>Password</b></label>
              <Form.Input
                icon='lock'
                iconPosition='left'
                className="sign-up-logininput"
                type="password"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.handleAllChange}
              />
            </Form.Field>
            <p className="invalid-logins">{this.state.error}</p>
            <Form.Field className="sign-up-login-submit-btn" color="black" control={Button}>Sign up</Form.Field>
          </Form>
        </Modal.Description>
      </div>
    );
  }
}

export default SignUp;
