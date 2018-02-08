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
      <div>
        <h1>
          navbarrrr
        </h1>
      </div>
    );
  }
}

export default withRouter(NavBar);
