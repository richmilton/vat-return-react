/* eslint react/prop-types: 0 */
import React, { Component } from 'react';

const testObligations = require('../test/data/obligations');

// stateless component
function Obligation({ data, data: { start, end } }) {
  const items = [];
  Object.keys(data).forEach((k, c) => {
    const key = `ob-${c}`;
    items.push(<div key={key}>{`${k}: ${data[k]}`}</div>);
  });
  return (
    <li>
      <h4>{`Period: ${start} to ${end}`}</h4>
      <div>
        {items}
      </div>
    </li>
  );
}

class Obligations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      obligations: testObligations,
    };
  }

  static renderObligation(v, c) {
    return <Obligation data={v} key={c} />;
  }

  renderObligations() {
    const obs = [];
    const { obligations } = this.state;
    obligations.forEach((v, c) => {
      obs.push(Obligations.renderObligation(v, c));
    });
    return obs;
  }

  render() {
    return (
      <ul>
        {this.renderObligations()}
      </ul>
    );
  }
}

export default Obligations;
