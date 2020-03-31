import React, { Component } from 'react';
import CommentCard from './CommentCard'
import CommentForm from './CommentForm'
import { Header, Container } from 'semantic-ui-react'

class CommentContainer extends Component {

  render() {
    let commentCard = this.props.destination.reviews ?  this.props.destination.reviews.map(review => <CommentCard key={review.id} review={review} user={this.props.user} deleteReview={this.props.deleteReview} routerProps={this.props.routerProps} /> ) : null

      return (
          <Container className="comment-container">
              <Header className="review-container-header">Reviews for this destination:</Header>
              {commentCard}
            <CommentForm createComment={this.props.createComment} />
          </Container>
      );
    }
  }

export default CommentContainer;
