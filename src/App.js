import React, { Component } from 'react';
import Chat from './Chat';
import logo from './logo.svg';
import './App.css';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

const users = [{ username: 'Amy' }, { username: 'John' }];

class App extends Component {
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  state = {
    messages: [
      { username: 'Amy', text: 'Hi, Jon!' },
      { username: 'Amy', text: 'How are you?' },
      { username: 'John', text: 'Hi, Amy! Good, you?' }
    ]
  }

  updateMessages = (msg) => {
    this.setState(thisState => ({
      messages : [...thisState.messages, msg]
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          {
            users.map((user, index) => (
              <Chat
                key={index}
                username={user.username}
                messages={this.state.messages}
                updateMessages={this.updateMessages}/>
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;
