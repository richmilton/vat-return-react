const fields  = [
    {
      type: 'text',
      name: 'username',
      placeholder: 'User name *',
      label: 'User name'
    },
    {
      type: 'password',
      name: 'password',
      placeholder: 'Password *',
      label: 'Password'
    },
    {
      type: 'vrn',
        name: 'vat number',
      placeholder: 'VAT number *',
      label: 'Vat Number'
    },
    {
      type: 'select',
        name: 'usertype',
      label: 'User type',
      placeholder: 'User type [select]',
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
    },
    {
      name: 'submit',
        type: 'submit',
      label: 'log in',
      className: 'btn-primary form-control'
    }
];

const propcalc = [
  {
    label: 'Property',
    name: 'pName',
    type: 'text',
    defVal: 'New'
  },
  {
    label: 'Price',
    name: 'val',
    type: 'number',
    defVal: '0'
  },
  {
    label: 'Done up value',
    name: 'duv',
    type: 'number',
    defVal: '0'
  },
  {
    label: 'Monthly rent',
    name: 'rent',
    type: 'number',
    defVal: '0'
  },
  {
    label: 'Surveyors fee',
    name: 'sFee',
    type: 'number',
    defVal: '0'
  },
  {
    label: 'Mortgage fee',
    name: 'mFee',
    type: 'number',
    defVal: '0'
  },
  {
    label: 'Solicitors fee',
    name: 'lFee',
    type: 'number',
    defVal: '0'
  },
  {
    label: 'Stamp duty',
    name: 'stamp',
    type: 'select',
    options: [{value: 'pers', name: 'Residential'},{value: 'corp', name: 'Commercial'}],
    defVal: 'pers'
  },
  {
    label: 'Refurbishment cost',
    name: 'refurb',
    type: 'number',
    defVal: '0'
  },
  {
    label: 'Other cost',
    name: 'other',
    type: 'number',
    defVal: '0'
  },
  {
    label: 'Re-mortgage fee',
    name: 'rmFee',
    type: 'number',
    defVal: '0'
  },
  {
    label: 'Re-mortgage valuation fee',
    name: 'rmvFee',
    type: 'number',
    defVal: '0'
  },
  {
    label: 'Re-mortgage solicitors fee',
    name: 'rmsFee',
    type: 'number',
    defVal: '0'
  },
  {
    label: 'Cash purchase',
    name: 'cash',
    type: 'checkbox',
    defVal: 'false'
  },
  {
    label: 'Letting agents rate (%)',
    name: 'let',
    type: 'number',
    options: [[0,0],[6,6],[7,7],[8,8],[9,9],[10,10],[11,11]],
    defVal: 10
  },
  {
    label: 'MOE rate (%)',
    name: 'moe',
    type: 'number',
    options: [[0,0],[10,10],[12,12],[14,14],[15,15],[16,16],[18,18]],
    defVal: 15
  },
  {
    label: 'Full repairing lease',
    name: 'frl',
    type: 'checkbox',
    defVal: false
  },
  {
    label: 'Interest rate (%)',
    name: 'int',
    type: 'number',
    options: [[1,'1.0'],[1.5,'1.5'],[2,'2.0'],[2.5,'2.5'],[3,'3.0'],[3.5,'3.5'],[4,'4.0'],[4.5,'4.5'],[5,'5.0'],[5.5,'5.5'],[6,'6.0'],[6.5,'6.5'],[7,'7.0'],[7.5,'7.5'],[8,'8.0'],[8.5,'8.5'],[9,'9.0'],[9.5,'9.5'],[10,'10.0']],
    defVal: 6.0
  },
  {
    label: 'Loan to Value (%)',
    name: 'ltv',
    type: 'number',
    options: [[50,50],[55,55],[60,60],[65,65],[70,70],[75,75],[80,80]],
    defVal: 75
  },

  {
    label: 'Solicitors selling fee',
    name: 'lsFee',
    type: 'number',
    defVal: '0'
  },
  {
    label: 'Agent/selling fee',
    name: 'eFee',
    type: 'number',
    defVal: '0'
  },
  {
    label: 'Mortgage stress test (%)',
    name: 'mst',
    type: 'number',
    options: [[125,125],[130,130],[135,135],[140,140],[145,145],[150,150],[155,155],[160,160]],
    defVal: 125
  },
  {
    label: 'Stress interest rate (%)',
    name: 'msi',
    type: 'number',
    defVal: 5.0
  }

];

module.exports = {propcalc: propcalc, fields: fields}