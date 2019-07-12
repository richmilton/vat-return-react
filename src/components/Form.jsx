/* eslint react/prop-types: 0 */
import React, { Component } from 'react';

// stateless component Label
const Label = ({
  name, label, doLabelClass, dynamicLabel,
}) => (
  <div className="inputLabel">
    <label
      htmlFor={name}
      className={doLabelClass(name)}
    >
      {dynamicLabel(name, label)}
    </label>
  </div>
);

const Input = ({
  className,
  name,
  type,
  placeholder,
  label,
  onInput,
  doLabelClass,
  dynamicLabel,
  defVal,
  required,
}) => (
  <li key={name}>
    <input
      className={className || 'form-control'}
      key={name}
      type={type}
      name={name}
      id={name}
      onChange={ev => onInput(ev)}
      autoComplete="off"
      placeholder={placeholder || label || `${name} [${type}]`}
      defaultValue={defVal || ''}
      required={required}
    />
    {Label({
      name, label, doLabelClass, dynamicLabel,
    })}
  </li>
);

// stateless component Select
const Select = ({
  name, className, placeholder, label, onInput, options, doLabelClass, dynamicLabel, required,
}) => (
  <li key={name}>
    <select
        // defaultValue={props.defVal}
      className={className || 'form-control'}
      key={name}
      name={name}
      id={name}
      onChange={ev => onInput(ev)}
      required={required}
    >
      <option value="">{placeholder || label || name}</option>
      {options.map(
        opt => (
          <option
            key={opt.value}
            name={opt.name}
            value={opt.value}
          >
            {opt.name}
          </option>
        ),
      )}
    </select>
    {Label({
      name, label, doLabelClass, dynamicLabel,
    })}
  </li>
);

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState(this.defValues());
  }

  componentDidUpdate() {
    // console.log(this.state);
  }

  defValues() {
    const v = {};
    const { fields } = this.props;
    fields.forEach(({ name, defVal }) => {
      v[name] = defVal;
    });
    return v;
  }

  doLabel(fname, label) {
    const { state } = this;
    return state[fname] ? label || fname : '';
  }

  doLabelClass(fname) {
    const { state } = this;
    return (state[fname]) ? 'show' : 'hide';
  }

  doStyle(fname) {
    const { state } = this;
    return state[fname] ? { width: '60%' } : { width: '100%' };
  }

  handleChange(t) {
    const newValObject = {};
    let val;
    switch (t.type) {
      case 'number':
        val = Number.isNaN(t.value) ? 0 : (parseFloat(t.value) || 0);
        break;
      case 'checkbox':
        val = t.checked ? 'yes' : 'no';
        break;
      default:
        val = t.value || '';
    }
    newValObject[t.name] = val;
    this.setState(newValObject);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { props: { onsubmit } } = this;
    onsubmit(this.state);
  }

  renderFields(fields) {
    const formFields = [];
    fields.forEach((field) => {
      const ob = { ...field };
      ob.dynamicLabel = (n, l) => this.doLabel(n, l);
      ob.doStyle = n => this.doStyle(n);
      ob.doLabelClass = n => this.doLabelClass(n);
      ob.onInput = e => this.handleChange(e.target, e);
      if (ob.type === 'select') {
        formFields.push(Select(ob));
      } else {
        formFields.push(Input(ob));
      }
    });
    return formFields;
  }

  render() {
    const { props: { name, fields } } = this;
    return (
      <form
        name={name}
        id={name}
        onSubmit={this.handleSubmit}
      >
        {this.renderFields(fields)}
      </form>
    );
  }
}

export default Form;
