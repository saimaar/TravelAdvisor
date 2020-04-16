import React, { Component } from 'react';
import PhotoCard from './PhotoCard'
import BucketlistContainer from './BucketlistContainer'
import { Image } from 'semantic-ui-react'

class ProfileContainer extends Component {

  state={

  }

  componentDidMount() {
    fetch('https://traveladvisor-api.herokuapp.com/profile', {
      headers: {
        "Authorization": `bearer ${localStorage.token}`
      }
    })
    .then(r => r.json())
    .then(user => {
      this.setState({
        ...user
      })
    })
  }

  deleteBucketItem = (deletedId) => {
    fetch(`https://traveladvisor-api.herokuapp.com/add_joiners/${deletedId}`, {
              method: "DELETE"
          })
          .then(r => r.json())
          .then(deletedItem => {
              let newBucketListArr = this.state.bucketlist.filter(bucketlistItem => bucketlistItem.id !== deletedItem.id)

              this.setState({
                ...this.state,
                bucketlist: newBucketListArr
              })
          })
  }

  deleteProfile = (userId) => {
    fetch(`https://traveladvisor-api.herokuapp.com/${userId}`, {
      method: "DELETE"
    })
    .then( r => r.json())
    .then(deletedUser => {
      this.setState({
        ...this.state
      })
      localStorage.clear()
      this.props.routerProps.history.push("/")
    })
  }

  render() {
// console.log(this.state);
    let { bucketlist } = this.state

    return (
      <div>
        <Image className="profile-cover-photo" src="https://www.katikiesmykonos.com/wp-content/uploads/2019/09/drz_katikies-mykonos_q1a0346.jpg" alt="" />
        <PhotoCard profile_info={this.state} deleteProfile={this.deleteProfile}/>
        <BucketlistContainer bucketlist={bucketlist} routerProps={this.props.routerProps} deleteBucketItem={this.deleteBucketItem}/>
      </div>
    );
  }

}

export default ProfileContainer;
