const fields = [
  {
    type: 'text',
    name: 'username',
    placeholder: 'User name *',
    label: 'User name',
    required: true,
  },
  {
    type: 'password',
    name: 'password',
    placeholder: 'Password *',
    label: 'Password',
    required: true,
  },
  {
    type: 'number',
    name: 'vatNumber',
    placeholder: 'VAT number *',
    label: 'Vat Number',
    required: true,
  },
  {
    type: 'select',
    name: 'usertype',
    label: 'User type',
    placeholder: 'User type [select]',
    required: true,
    options: [
      {
        name: 'organisation',
        value: 'organisation',
      },
      {
        name: 'individual',
        value: 'individual',
      },
      {
        name: 'agent',
        value: 'agent',
      },
    ],
  },
  {
    name: 'submit',
    type: 'submit',
    label: 'log in',
    className: 'btn-primary form-control',
  },
];

module.exports = { fields };
