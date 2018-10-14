import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMessage from './AddMessage';
import MessagesList from './MessagesList';

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

        <MessagesList
          messages={messages}
          username={username} />

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
