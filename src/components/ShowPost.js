import React, { Component } from 'react';

class ShowPost extends Component {

  render() {
    return (
      <div>

        <h1>Show Post</h1>
        <h3>{this.props.title}</h3>

      </div>
    );
  }

}

export default ShowPost;
