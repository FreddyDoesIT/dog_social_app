import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      votes: 0
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      votes: this.state.votes+1
    });
  }

  render() {
    return (
      <Card style={{ width: "18rem" }}>
        
        <Card.Body>
        <Card.Title>{this.props.post.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{this.props.post.breed}</Card.Subtitle>
          <Card.Text>
            <span>{this.props.post.text}</span>
          </Card.Text>
          <Button variant="outline-danger" onClick = {this.onClick}>
            
            <span>Like  {this.state.votes}</span>
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired
};



