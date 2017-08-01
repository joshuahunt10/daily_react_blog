import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom'

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
    })
  }

  render() {
    return (
      <div className='container'>
        <div className="row">
            {this.state.posts.map((entries) => {
              return(
                <div className="col-sm-6">
                <div className="card" key={entries._id}>
                  <div className="card-block">
                    <Link to={`/postlist/${entries._id}`}><h4 className="card-title">{entries.title}</h4></Link>
                    <h6 className="card-subtitle mb-2 text-muted">{entries.name}</h6>
                    <p className="card-text">{entries.blog}</p>
                  </div>
                </div>
              </div>
              )
            })}
        </div>
      </div>
    );
  }

}

export default PostList;
