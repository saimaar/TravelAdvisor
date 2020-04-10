import React, { Component } from 'react';
import { Segment, Image, Dropdown } from 'semantic-ui-react'

class PhotoCard extends Component {

  allReviews = () => {
    if(this.props.profile_info.reviews === undefined){
      return 0
    }else if(this.props.profile_info.reviews.length && this.props.profile_info.reviews.length < 1){
      return 0
    }else{
      return this.props.profile_info.reviews.length
    }
  }

  allBucketlistItems = () => {
    if(this.props.profile_info.bucketlist === undefined){
      return 0
    }else if(this.props.profile_info.bucketlist.length && this.props.profile_info.bucketlist.length < 1){
      return 0
    }else{
      return this.props.profile_info.bucketlist.length
    }
  }

  handleDelete = () => {
    this.props.deleteProfile(this.props.profile_info.id)
  }

  render() {

    let { username, picture, bio } = this.props.profile_info

    return (
        <Segment className="photo-container">
          <div className="photo-header-container">
            <Image className="profile-picture" src={this.props.profile_info.picture === "" ? 'https://react.semantic-ui.com/images/avatar/small/veronika.jpg' : this.props.profile_info.picture } alt={username} />
            <div className="photo-contribution-container">
              <span className="photo-contribution-title">Contributions</span>
              <span className="photo-contribution-number">{this.allReviews()}</span>
            </div>
            <div className="photo-bucketlist-container">
              <span className="photo-bucketllist-title">Bucketlist items</span>
              <span className="photo-bucketlist-number">{this.allBucketlistItems()}</span>
            </div>
          </div>
          <div className="bio-delete-container">
            <span className="profile-bio">{bio}</span>
            <Dropdown icon='cog' className="profile-delete-btn">
              <Dropdown.Menu>
                <Dropdown.Item
                  text='Delete Profile'
                  value='delete'
                  onClick={this.handleDelete}
                  />
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Segment>
    );
  }

}

export default PhotoCard;
