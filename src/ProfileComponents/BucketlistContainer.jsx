import React, { Component } from 'react';
import BucketlistCard from './BucketlistCard'
import DestinationCard from '../HomeComponents/DestinationCard'
import {Link} from 'react-router-dom'
import { Container, Header, Card } from 'semantic-ui-react'

class BucketlistContainer extends Component {


  render() {
    console.log(this.props.bucketlist);
    let bucketlistDestination = !this.props.bucketlist ? null :
     this.props.bucketlist.map(bucketlistItem =>
        <Link  key={bucketlistItem.destination.id} to={`/${bucketlistItem.destination.id}`}>
          <BucketlistCard  key={bucketlistItem.id}
          bucketlistItem={bucketlistItem}
          routerProps={this.props.routerProps}
          deleteBucketItem={this.props.deleteBucketItem}/></Link>)

    return (
      <Container className="bucketlist-container">
          <Header className="bucketlist-container-header">Bucketlist</Header>
        <Card.Group className="bucketlist-group-card">
          {bucketlistDestination}
        </Card.Group>
      </Container>
    );
  }

}

export default BucketlistContainer;
