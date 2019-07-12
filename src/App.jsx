import React, { Component } from 'react';
import './App.css';
import Obligations from './components/Obligations';
import Form from './components/Form';
import { fields } from './components/formConfigs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // obligations: [],
      userData: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleSubmit({ username, password, vatNumber }) {
    if (username && password && vatNumber) {
      this.setState({ userData: { username, password, vatNumber } });
    }
  }

  handleLogout(e) {
    e.preventDefault();
    this.setState({ userData: null });
  }

  doContent() {
    const { userData } = this.state;
    if (userData !== null) {
      return (
        <React.Fragment>
          <button
            type="submit"
            className="form-control btn-primary"
            onClick={this.handleLogout}
          >
            Log out
          </button>
          <Obligations />
        </React.Fragment>
      );
    }

    return (
      <Form
        name="login"
        fields={fields}
        onsubmit={this.handleSubmit}
      />
    );
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
