import React, { Component } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { Form, Button, Rating } from 'semantic-ui-react'

class CommentForm extends Component {

  state={
    comment: "",
    rating: 0
  }

  handleChange = (event) => {
    let {name, value} = event.target
    this.setState({
        [name]: value,
    })
}

handleRate=(evt)=>{
  let rating = parseInt(evt.target.getAttribute("aria-posinset"))
  this.setState({
    rating
  })
}


  handleSubmit=(evt)=>{
    evt.preventDefault()
    this.props.createComment(this.state)
    this.setState({
      comment: "",
      rating: 0
    })
  }


  render() {
    return (
      <Form onSubmit={this.handleSubmit} hidden={localStorage.token ? false : true}>
        <TextareaAutosize
          className="comment-form-input"
          label='Leave a review here:'
          placeholder="Write your thoughts"
          name="comment"
          value={this.state.comment}
          onChange={this.handleChange}
        />
        <Rating
          className="comment-form-rating"
          icon="star"
          name="rating"
          onRate={this.handleRate}
          maxRating={5}
          rating={this.state.rating}
        />
        <br/>
        <Button className="create-review-button" type='submit'>Submit</Button>
      </Form>
    );
  }

}

export default CommentForm;
