import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SessionFormContainer from './session_form/session_form_container';
import NavBarContainer from './nav/navbar_container';

const App = () => (
  <div>
      <NavBarContainer />
      
      <AuthRoute path="/login" component={SessionFormContainer}/>
      <AuthRoute path="/signup" component={SessionFormContainer}/>
  </div>
);

export default App;
