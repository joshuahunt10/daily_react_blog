import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/')
    .then(r => r.json())
    .then(data => {
      this.setState({posts: data})
      console.log('data from the fetch', data);
    })
  }

  render() {
    return (
      <div>
        {this.state.posts.map((entries) => {
          return(
            <div key={entries._id}>
              <Link to={`/postlist/${entries._id}`}> <h3>{entries.title}</h3> </Link>
              <p>{entries.name}</p>
              <p>{entries.blog}</p>
              <hr />
            </div>
          )
        })}

      </div>
    );
  }

}

export default PostList;
