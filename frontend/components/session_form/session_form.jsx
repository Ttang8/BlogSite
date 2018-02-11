import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

class SessionForm extends Component{
  constructor(props){
    super(props);

    this.state = {
      username: "",
      password: "",
      modalIsOpen: true
    };
    console.log('props', this.props);
    this.setState = this.setState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


    this.toggleModal = {toggle:true};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount () {
    this.props.clearErrors();
  }

  update(field) {
    return event => this.setState({[field]: event.target.value});
  }

  handleSubmit() {
    console.log(this);
    event.preventDefault();
    const user = this.state;
    this.props.processForm({user});
    this.state = {
      username:"",
      password:""
    };
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
    this.props.clearErrors();
    this.props.history.push('/');
  }

  renderErrors(){
    return(
      <ul>
        {this.props.errors.map((error, idx) => (
          <li key={idx}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return(
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          shouldCloseOnOverlayClick={true}
          contentLabel="SessionFormModal"
          className="session-modal"
          ariaHideApp={false}
          bodyOpenClassName="modal-open"
        >
          <div>
            {this.props.formType === 'login' ? 'Log In' : 'Create Account'}
          </div>
          <div>
            {this.renderErrors()}
          </div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <input
                placeholder="Username"
                type="text"
                autoFocus="autofocus"
                value={this.state.username}
                onChange={this.update('username')}>
              </input>
            </div>
            <div>
              <input
                placeholder="Password"
                type="password"
                value={this.state.password}
                onChange={this.update('password')}>
              </input>
            </div>
            <input
              type="submit"
              value="Submit"></input>
          </form>
        </Modal>
      </div>
    );
  }
}

export default SessionForm;
