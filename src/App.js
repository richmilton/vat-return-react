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

  static handleSubmit (e, data) {
    if (data['username'] && data['password'] && data['usertype']) {
      alert('well done');
    }
    else {
      alert('fill the freakin form in you twat');
    }
    console.log(e, data);
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
                    name: 'select',
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
                  value: 'log in'
                }
              ]
            }
            onsubmit={(e, d) => App.handleSubmit(e, d)}
          />

        </header>

      </div>
    );
  }
}

export default App;
