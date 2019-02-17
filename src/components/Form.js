import React, { Component } from 'react';

const Input = (props) => {

  return <li key={props.name}>
      {Label(props)}
    <input
      key={props.name}
      type={props.type}
      name={props.name}
      id={props.name}
      onChange={(e) => props.onchange(e)}
      autoComplete={'off'}
      placeholder={props.placeholder || props.label || props.name}
  />
  </li>
};

const Select = (props) => {
  return <li key={props.name}>
    {Label(props)}
    <select
      key={props.name}
      name={props.name}
      id={props.name}
      onChange={(ev) => props.onchange(ev)}
      placeholder={props.placeholder || props.label || props.name}
    >
      {renderOptions(props.options)}
    </select>
  </li>
};

const Label = (props) => {
  return <div className={'inputLabel'} >
    <label
      htmlFor={props.name}
      className={props.doLabelClass(props.name)}>
      {props.dynamiclabel(props.name, props.label)}
    </label>
  </div>
};

const Option = (props) => {
  return <option
    key={props.value}
    id={props.name}
    value={props.value}>
    {props.name}
  </option>
};

const renderOptions = (options) => {
  let selectOptions = [];
  options.forEach(ob => {
    selectOptions.push(Option(ob));
  });
  return selectOptions;
};

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: props.fields
    };
  }

  doLabel (fname, label) {
    return this.state[fname] ? label || fname : '';
  }

  doLabelClass (fname) {
    return this.state[fname] ? 'show' : 'hide';
  }

  doStyle (fname) {
    return this.state[fname] ? {width:'60%'} : {width:'100%'};
  }

  renderFields = (fields) => {
    let formFields = [];
    fields.forEach(ob => {
      ob.dynamiclabel = (n, l) => this.doLabel(n, l);
      ob.doStyle = n => this.doStyle(n);
      ob.doLabelClass = n => this.doLabelClass(n);
      ob.onchange = e => this.handleChange(e.target, e);
      if (ob.type === 'select') {
        formFields.push(Select(ob))
      }
      else {
        formFields.push(Input(ob));
      }
    });
    return formFields;
  };

  handleChange = (t, e) => {
    console.log(t.name, e.type);
    let val = {};
    val[t.name] = t.value;
    this.setState(val);
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.onsubmit(this.state);
  }

  componentDidUpdate () {
    console.log(this.state);
  }

  render() {

    return <form
      name={this.props.name}
      id={this.props.name}
      onSubmit={(e)=>this.handleSubmit(e)}
    >
      {this.renderFields(this.state.fields)}
    </form>
  }
}

export default Form;