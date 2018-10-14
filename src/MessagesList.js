import React from 'react';
import PropTypes from 'prop-types';

const MessagesList = ({messages, username}) => {
  const messagesList = messages.map((message, index) => (
    <li
      key={index}
      className={message.username === username ? 'message sender' : 'message recipient'}>
      <p>{`${message.username}: ${message.text}`}</p>
    </li>
  ));

  return (
    <ul className="message-list">{messagesList}</ul>
  );
}

MessagesList.propTypes = {
  messages: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired
}

export default MessagesList;
