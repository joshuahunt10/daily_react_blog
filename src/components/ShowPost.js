import React, { Component } from 'react';

class ShowPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {}
    }
  }

  componentDidMount(){
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/')
    .then(r => r.json())
    .then(data => {
      const post = data.find( (post) => {
        return post._id === this.props.match.params.postID
        console.log('post._id', post._id);
        console.log('the params ', this.props.match.params.postID);
      })

      this.setState({post: post})
      console.log(this.state);

    })
  }
  render() {

    const blogInfo = this.state.post
    return (
      <div>
        <div className="col-sm-6">
          <div className="card mx-auto">
            <div className="card-block">
              <h4 className="card-title">{blogInfo.title}</h4>
              <h6 className="card-subtitle mb-2 text-muted">{blogInfo.name}</h6>
              <p className="card-text">{blogInfo.blog}</p>
            </div>
          </div>
        </div>

      </div>
    );
  }

}

export default ShowPost;
