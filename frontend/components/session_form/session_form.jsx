import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends Component{
  constructor(props){
    super(props);

    this.state = {
      username: "",
      password: "",
    };
    this.setState = this.setState.bind(this);
    console.log(this.props);
  }

  componentWillMount () {
    this.props.clearErrors();
  }

  render() {
    return(
      <div>
        <h1>
          hello
        </h1>
      </div>
    );
  }
}

export default SessionForm;
