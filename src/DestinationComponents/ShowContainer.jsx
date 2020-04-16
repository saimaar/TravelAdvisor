import React, { Component } from 'react';
import CommentContainer from './CommentContainer'
import PhotoContainer from './PhotoContainer'
import ThingsToDoContainer from './ThingsToDoContainer'
import NotFound from '../NotFound'
import { Card, Header } from 'semantic-ui-react'
import { Divider, Form, Label } from 'semantic-ui-react'

class ShowContainer extends Component {

  state = {
    clicked: false,
  }

  componentDidMount() {
    let destination_id = parseInt(this.props.routerProps.match.params.id)
    fetch(`https://traveladvisor-api.herokuapp.com/destinations/${destination_id}`)
    .then(r => r.json())
    .then(destination => {
      this.setState({
        ...destination
      })
    })
  }

  createComment = (newComment) => {
    debugger
    fetch('https://traveladvisor-api.herokuapp.com/reviews', {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accept": "application/json",
        "Authorization": `bearer ${localStorage.token}`
      },
      body: JSON.stringify({
        destination_id: this.state.id,
        comment: newComment.comment,
        rating: newComment.rating
      })
    })
    .then(r => r.json())
    .then((newReview) => {
      let reviewArr = [...this.state.reviews, newReview]
      this.setState({
        reviews: reviewArr
      })
    })
  }

  deleteReview = (review_id) => {
    fetch(`https://traveladvisor-api.herokuapp.com/reviews/${review_id}`, {
      method: "DELETE"
    })
    .then(r => r.json())
    .then(deletedReview => {
      let newReviewArr = this.state.reviews.filter(review => review.id !== deletedReview.review.id)
      this.setState({
        ...this.state,
        reviews: newReviewArr
      })
    })
  }

  addToBucketList = (notifyAdd) => {
      fetch('https://traveladvisor-api.herokuapp.com/add_joiners', {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "Authorization": `bearer ${localStorage.token}`
        },
        body: JSON.stringify({
          destination_id: this.state.id
        })
      })
      .then(r => r.json())
      .then(add_joiner => {
          let newAddJoiner = [...this.state.add_joiners, add_joiner]
          this.setState({
            add_joiners: newAddJoiner,
            clicked: !this.state.clicked
        })
      })
  }


  render() {
    let { things_to_dos } = this.state
    let thingsToDo = !things_to_dos ? null : things_to_dos.map(thingstodo => <ThingsToDoContainer key={thingstodo.id} thingstodo={thingstodo}/>)
    let notifyAdd =  this.state.clicked ? <Label pointing ="right" className="notifyAdd" size ="teal" basic color='black' >
          Added to your bucketlist!
        </Label> : null
    return (
      <div>
        {this.props.destinationsId.includes(parseInt(this.props.routerProps.match.params.id)) ?
          <div>
            <div className="buckNotify">
          {notifyAdd}
          <div onClick={this.addToBucketList} className="add-to-bucketlist" hidden={localStorage.token ? false : true}>+ Add to bucketlist </div>
            </div>
        <PhotoContainer destination={this.state}/>
            <Header className="things-to-do-container-header">Things to Do</Header>
            <Card.Group className="things-to-do-container">{thingsToDo}</Card.Group>
            <CommentContainer routerProps={this.props.routerProps} deleteReview={this.deleteReview} createComment={this.createComment} destination={this.state} user={this.props.user} />
          </div>
          :
          <div>
            <NotFound />
          </div>
        }
      </div>
    );
  }
}

export default ShowContainer;
