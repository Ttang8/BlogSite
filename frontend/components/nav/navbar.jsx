import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import { withRouter } from 'react-router';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ""
    };
  }

  render() {
    return (
      <div className="nav-bar">
        <Link className="login-button" to="/login">Log In
        </Link>
        <Link className="login-button" to="/signup">Sign Up
        </Link>
      </div>
    );
  }
}

export default withRouter(NavBar);
