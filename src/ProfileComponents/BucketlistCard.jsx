import React, { Component } from 'react';
import { Card, Image, Header, Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class BucketlistCard extends Component {

    handleDelete = () => {
        this.props.deleteBucketItem(this.props.bucketlistItem.id)
    }

    render() {

        let {name, photo} = this.props.bucketlistItem.destination
        return (
          <div>
            <Link  key={this.props.bucketlistItem.destination.id} to={`/${this.props.bucketlistItem.destination.id}`}>
                <Card className="bucketlist-card">
                <Image className="bucketlist-image" src={photo} alt="bucketlist destination"/>
                <Card.Content className="buckelist-content">
                    <Header className="bucketlist-header">{name}</Header>
                </Card.Content>
            </Card>
            </Link>
            <Button size="big" fluid icon="trash" onClick={this.handleDelete}/>
          </div>
        );
    }
}

export default BucketlistCard;
