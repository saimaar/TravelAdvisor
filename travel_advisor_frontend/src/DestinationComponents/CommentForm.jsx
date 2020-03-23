import React, { Component } from 'react';
import { Form, Button, Rating } from 'semantic-ui-react'

class CommentForm extends Component {

  state={
    comment: "",
    rating: 0
  }

  handleChange = (event, { rating }) => {
    let {name, value} = event.target

    this.setState({
        [name]: value,
        rating
    })
}

  handleSubmit=(evt)=>{
    evt.preventDefault()
    this.props.createComment(this.state)
  }


  render() {
    return (

      <Form onSubmit={this.handleSubmit}>
        <Form.TextArea
            className=""
            label='Leave a review here:'
            placeholder="Write your thoughts"
            name="comment"
            value={this.state.comment}
            onChange={this.handleChange}
        />
        <Rating
            icon="star"
            name="rating"
            onRate={this.handleChange}
            maxRating={5} 
            clearable
        />
        <br/>
        <Button className="create-review-button" type='submit'>Submit</Button>
      </Form>
    );
  }

}

export default CommentForm;
