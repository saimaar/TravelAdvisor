import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { Header, Button, Image, Modal } from 'semantic-ui-react'
import SignUp from './HomeComponents/SignUp'
import Login from './HomeComponents/Login'

class HeaderContainer extends Component {

  logOutUser = () => {
    localStorage.clear()
    this.props.historyProps.history.push("/")
  }

  render() {
    return (
      <div className="page-header">
        <Link to="/">
          <div className="logo-title-header">
            <Image src="https://static.tacdn.com/favicon.ico?v2" alt="logo" className="page-logo"/>
            <Header className="page-title">TravelAdvisor</Header>
          </div>
        </Link>
        <Header className="header-buttons">
          {localStorage.token ?
            <>
              <Link to="/profile" >
                <Button className="profile-btn">Profile</Button>
              </Link>
              <Button className="logout-btn" onClick={this.logOutUser}>Logout</Button>
              <Link to="/" >
              <Button className="home-btn">Home</Button>
              </Link>
            </> :
            <>
            <Modal trigger={<Button className="sign-up-btn">Log in</Button>}>
              <Login error={this.props.error} loginUser={this.props.loginUser} history={this.props.historyProps.history}/>
            </Modal>
            <Modal trigger={<Button className="sign-up-btn">Sign up</Button>}>
            <SignUp createNewUser={this.props.createNewUser} history={this.props.historyProps.history}/>
          </Modal>
          <Link to="/" >
          <Button className="home-btn">Home</Button>
          </Link>
          </>
          }
        </Header>
      </div>
    );
  }

}

export default HeaderContainer;
