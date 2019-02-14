import React, { Component } from 'react';
const obligations = require('../test/data/obligations');

//stateless component
function Obligation(props) {
  let items = [];
  Object.keys(props.data).forEach((k, c) => {
    items.push(<div key={c}>{`${k}: ${props.data[k]}`}</div>)
  });
  return <li>
    <h4>{`Period: ${props.data.start} to ${props.data.end}`}</h4>
    <div>
      {items}
    </div>
  </li>

}

class Obligations extends Component {

  constructor(props) {
    super(props);
    this.state = {
      obligations: obligations
    };
  }

  static renderObligation(v, c) {
    return <Obligation data={v} key={c} />
  }

  renderObligations() {
    let obs = [];
    this.state.obligations.forEach((v, c) => {
      obs.push(Obligations.renderObligation(v, c));
    });
    return obs;
  }

  render () {

    return <ul>
      {this.renderObligations()}
    </ul>
  };
}

export default Obligations;