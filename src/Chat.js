import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMessage from './AddMessage';

class Chat extends Component {

  static propTypes = {
    messages: PropTypes.array.isRequired,
    updateMessages: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired
  }

  render() {
    const username = this.props.username;
    const messages = this.props.messages;
    const updateMessages = this.props.updateMessages;

    return (
      <div className="chat-window">
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{username}</div>

        <ul className="message-list">
          {messages.map((message, index) => (
            <li
              key={index}
              className={
                message.username === username ? 'message sender' : 'message recipient'
              }
            >
              <p>{`${message.username}: ${message.text}`}</p>
            </li>
          ))}
        </ul>

        <div>
          <AddMessage
            updateMessages={updateMessages}
            username={username} />
        </div>
      </div>
    );
  }
}

export default Chat;
