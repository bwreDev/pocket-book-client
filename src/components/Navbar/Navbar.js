import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import TokenService from '../../services/token-services';
//import IdleService from '../../services/idle-service';
import './Navbar.css';

export default class Navbar extends Component {
  /*
  state = {
    user: null,
  };

  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    TokenService.clearCallbackBeforeExpiry();
    IdleService.unRegisterIdleResets();
  };

  renderLogoutLink() {
    return (
      <>
        <li>
          <Link to='/user'>Profile</Link>
        </li>
        <li>
          <Link to='/input'>Add Input</Link>
        </li>
        <li>
          <Link to='/' onClick={this.handleLogoutClick}>
            Logout
          </Link>
        </li>
      </>
    );
  }

  renderLoginLink() {
    return (
      <>
        <li>
          <Link to='/register'>Register</Link>
        </li>
        <li>
          <Link to='/login'>Log in</Link>
        </li>
      </>
    );
  }
  */

  render() {
    return (
      <nav role='navigation' className='navbar'>
        <ul className='navbar-list'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/register'>Register</Link>
          </li>
          <li>
            <Link to='/user'>Profile</Link>
          </li>
          <li>
            <Link to='/input'>Input</Link>
          </li>
          {/*
          TokenService.hasAuthToken()
            ? this.renderLogoutLink()
          : this.renderLoginLink()
          */}
        </ul>
      </nav>
    );
  }
}
