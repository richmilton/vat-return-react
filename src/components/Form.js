import React, { Component } from 'react';

function Input (props) {
  return <input
    key={props.name}
    type={props.type}
    name={props.name}
    id={props.name}
    onChange={(ev) => props.onchange(ev)}
  />
}

const Select = (props) => {
  return <select
    key={props.name}
    name={props.name}
    id={props.name}
    onChange={(ev) => props.onchange(ev)}
  >
    {renderOptions(props.options)}
  </select>
}

const Option = (props) => {
  return <option key={props.value} id={props.name} value={props.value}>{props.name}</option>
}

const renderOptions = (options) => {
  let selectOptions = [];
  options.forEach(ob => {
    selectOptions.push(Option(ob));
  });
  return selectOptions;
}

const renderFields = (fields) => {
  let formFields = [];
  fields.forEach(ob => {
    console.log(ob);
    if (ob.type === 'select') {
      formFields.push(Select(ob))
    }
    else {
      formFields.push(Input(ob));
    }
  });
  return formFields;
}

class Form extends Component {
  constructor(props) {
    super(props);
    props.fields.forEach(ob => {
      ob.onchange = (ev) => this.handleChange(ev);
    });
    this.state = {
      fields: props.fields
    };
  }

  handleChange(ev) {
    let val = {};
    val[ev.target.name] = ev.target.value;
    //alert(val[ev.target.name]);
    this.setState(val);
  }

  componentDidUpdate () {
    console.log(this.state);
  }

  render() {

    return <form name={this.props.name} id={this.props.name}>
      {renderFields(this.state.fields)}
    </form>
  }
}

export default Form;