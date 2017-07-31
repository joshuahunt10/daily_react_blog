import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

class Layout extends Component {

  render() {
    return (
      <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/createpost'>Create a Post</NavLink>
        <NavLink to='/postlist'>Post List</NavLink>
        {this.props.children}
      </div>
    );
  }

}

export default Layout;
