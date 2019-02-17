import React, { Component } from 'react';
import './App.css';
//import Game from './TicTacToe';
//import Obs from './components/obligations';
import Obligations from './components/Obligations';
import Form from './components/Form';
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {fields} from './components/formConfigs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      obligations: [],
      loggedIn: 0
    };
  }

  handleSubmit = (data) => {
    console.log(data);
    if (data['username'] && data['password'] && data['vat number']) {
      this.setState({loggedIn: 1});
    }
  };

  handleLogout = () => {
    this.setState({loggedIn: 0});
  };

  doContent () {
    if (this.state.loggedIn) {
      return (
        <React.Fragment>
          <button
            className="form-control btn-primary"
            onClick={this.handleLogout}
          >
            Log out
          </button>
          <Obligations />
        </React.Fragment>
      )
    }
    else {
      return (
        <Form
          name={'login'}
          fields={fields}
          onsubmit={this.handleSubmit}
        />
      )
    }
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          {this.doContent()}
        </header>
      </div>
    );
  }
}

export default App;
