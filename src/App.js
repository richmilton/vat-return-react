import React, { Component } from 'react';
import './App.css';
//import Game from './TicTacToe';
//import Obs from './components/obligations';
//import Obligations from './components/Obligations';
import Form from './components/Form';
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      obligations: []
    };
  }

  static handleSubmit (data) {
    console.log(data);
    if (data['username'] && data['password'] && data['vat number']) {
      alert('well done');
    }
  }

  render() {

    //const _this = this;

    return (
      <div className="App">
        <header className="App-header">
          <Form
            name={'login'}
            fields={
              [
                {
                  type: 'text',
                  name: 'username',
                  placeholder: 'user name *',
                  label: 'User Name'
                },
                {
                  type: 'password',
                  name: 'password',
                  placeholder: 'password *',
                  label: 'Password'
                },
                {
                  type: 'vrn',
                  name: 'vat number',
                  placeholder: 'vat number *',
                  label: 'Vat Number'
                },
                {
                type: 'select',
                name: 'usertype',
                label: 'User Type',
                options: [
                  {
                    name: 'user type',
                    value: ''
                  },
                  {
                    name: 'agent',
                    value: 'agent'
                  },
                  {
                    name: 'individual',
                    value: 'individual'
                  },
                  {
                    name: 'organisation',
                    value: 'organisation'
                  }
                ]
              },
                {
                  name: 'submit',
                  type: 'submit',
                  label: 'log in'
                }
              ]
            }
            onsubmit={App.handleSubmit}
          />
        </header>

      </div>
    );
  }
}

export default App;
