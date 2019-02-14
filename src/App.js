import React, { Component } from 'react';
import './App.css';
//import Obs from './components/obligations';
import Obligations from './components/Obligations';
import Form from './components/Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      obligations: []
    };
  }
  render() {

    return (
      <div className="App">
        <header className="App-header">

          <Obligations />
          <Form
            name={'login'}
            fields={
              [
                {
                  type: 'text',
                  name: 'username'
                },
                {
                  type: 'password',
                  name: 'password'
                },{
                type: 'select',
                name: 'usertype',
                options: [
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
              }
              ]
            }
          />

        </header>

      </div>
    );
  }
}

export default App;
