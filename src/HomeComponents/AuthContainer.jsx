import React, { Component } from 'react';
import { Icon, Label } from 'semantic-ui-react'


class AuthContainer extends Component {

  render() {

    return (
      <div>
      {localStorage.token ?
        <div  className="welcome-container">
          <Label image size="big">
            <img src={this.props.user.picture === "" ? "https://react.semantic-ui.com/images/avatar/small/veronika.jpg" : this.props.user.picture }/>
            Welcome {this.props.user.username}!
          </Label> </div> : null }
      </div>
    );
  }

}



export default AuthContainer;
