import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      title: '',
      blog: '',
      submitted: false

    }
    this.handleAuthor = this.handleAuthor.bind(this)
    this.handleTitle = this.handleTitle.bind(this)
    this.handleText = this.handleText.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleAuthor(e){
    this.setState({
      name: e.target.value
    })
  }
  handleTitle(e){
    this.setState({
      title: e.target.value
    })
  }
  handleText(e){
    this.setState({
      blog: e.target.value
    })
  }
  handleSubmit(e){
    e.preventDefault()
    console.log('submitted!!!', this.state);
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(r => {
      console.log(r, 'yay');
    }).catch(err => {
      console.log('boo this is the error:', err);
    })

    this.setState({
      name: '',
      title: '',
      blog: '',
      submitted: true
    })
  }

  render() {
    if(this.state.submitted === true){
      return <Redirect to='/postlist' />
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Author</label>
          <input type="text" name="author" onChange={this.handleAuthor} value={this.state.name}/>

          <label htmlFor="title">Title</label>
          <input type="text" name="title" onChange={this.handleTitle} value={this.state.title}/>

          <label htmlFor='blog'>Say what ya mean</label>
          <textarea name="blog" onChange={this.handleText} value={this.state.blog}></textarea>

          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }

}

export default CreatePost;
