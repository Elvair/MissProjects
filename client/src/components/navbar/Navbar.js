// navbar/Navbar.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../auth/AuthService';
import './navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] })
  }

  handleLogout = (e) => {
    this.props.logout()
  }

  render() {
    if (this.state.loggedInUser) {
      return (
        <nav className="nav-style">
          <ul>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/templates'>Templates</Link></li>
          </ul>
          <ul>
            <li><a onClick={this.handleLogout}>Logout</a></li>
          </ul>

          <h2>Welcome, {this.state.loggedInUser.username}</h2>
        </nav>
      )
    } else {
      return (
        <div>
          <nav className="nav-style">
            <ul>
              <li><Link to='/home'>Home</Link></li>
              <li><Link to='/signup'>Signup</Link></li>
              <li><Link to='/login'>Login</Link></li>
            </ul>
          </nav>
          <div>
          </div>
        </div>
      )
    }
  }
}

export default Navbar;