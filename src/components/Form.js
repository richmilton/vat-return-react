import React, { Component } from 'react';

const Input = (props) => {

  return (
    <li key={props.name}>
      <input
        className={props.className || 'form-control'}
        key={props.name}
        type={props.type}
        name={props.name}
        id={props.name}
        onChange={(e) => props.onInput(e)}
        autoComplete={'off'}
        placeholder={props.placeholder || props.label || props.name}
        defaultValue={props.defVal}
      />
      {Label(props)}
    </li>
  )
};

const Select = (props) => {
  return (
    <li key={props.name}>
      <select
        //defaultValue={props.defVal}
        className={props.className || 'form-control'}
        key={props.name}
        name={props.name}
        id={props.name}
        onChange={(ev) => props.onInput(ev)}
        //placeholder={props.placeholder || props.label || props.name}
      >
        <option value="" disabled>{props.placeholder || props.label || props.name}</option>
        {props.options.map(
          opt =>
            <option
              key={opt.value}
              name={opt.name}
              value={opt.value}>{opt.name}
            </option>
        )}
      </select>
      {Label(props)}
    </li>
  )
};

const Label = (props) => {
  return (
    <div className={'inputLabel'} >
      <label
        htmlFor={props.name}
        className={props.doLabelClass(props.name)}>
        {props.dynamicLabel(props.name, props.label)}
      </label>
    </div>
  )
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
      ob.dynamicLabel = (n, l) => this.doLabel(n, l);
      ob.doStyle = n => this.doStyle(n);
      ob.doLabelClass = n => this.doLabelClass(n);
      ob.onInput = e => this.handleChange(e.target, e);
      if (ob.type === 'select') {
        formFields.push(Select(ob))
      }
      else {
        formFields.push(Input(ob));
      }
    });
    return formFields;
  };

  handleChange = (t) => {
    //console.log(t.name, e.type);
    let val = {};
    val[t.name] = t.value;
    this.setState(val);
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.onsubmit(this.state);
  }

  componentDidMount() {
    let defaultVals = {};
    this.state.fields.forEach(ob => {
      if (ob.defVal) {
        defaultVals[ob.name] = ob.defVal;
      }
      this.setState(defaultVals);
    });
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