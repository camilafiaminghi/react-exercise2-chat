import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Message extends Component {

  static propTypes = {
    updateMessages: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired
  }

  state = {
    text: ''
  }

  isValid = () => {
    const user = this.state;

    return Object.keys(user).every(function (key) {
      return !!String(user[key]).trim();
    });
  }

  handleChange = (event) => {
    const {name, value} = event.target;

    this.setState(() => ({
      [name]: value
    }))
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const username = this.props.username;
    const text = this.state.text;

    this.props.updateMessages({username, text});
    this.setState(thisState => ({
      text: ''
    }));
  }

  render() {
    return (
      <form
        className="input-group"
        onSubmit={this.handleSubmit}>

        <input
          type="text"
          className="form-control"
          placeholder="Enter your message..."
          name="text"
          value={this.state.text}
          onChange={this.handleChange} />

        <div className="input-group-append">
          <button
            className="btn submit-button"
            disabled={!this.isValid()}>
            SEND
          </button>
        </div>
      </form>
    );
  }
}

export default Message;
