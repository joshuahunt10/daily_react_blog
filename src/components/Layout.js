import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

class Layout extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">Navbar</a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <NavLink className="nav-link" activeClass="sr-only" to='/'>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/createpost' className="nav-link" activeClass="sr-only">Create a Post</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/postlist' className="nav-link" activeClass="sr-only">Post List</NavLink>
              </li>

            </ul>
          </div>
        </nav>



        {this.props.children}
      </div>
    );
  }

}

export default Layout;
