import React from 'react';
import '../../styles/Form.css';
import Input from './Input';
import Select from './Select';

const Form = ({ fields }) => {
  return <div class="formulario">{fields.map(selectInput)}</div>;
};

function selectInput(data) {
  const type = data.type;
  if (type.startsWith('select')) return SelectOne(data);
  else return InputField(data);
}

const InputField = (data) => {
  return <Input label={data.label} name={data.name} required={data.required} type={data.type}></Input>;
};

const SelectOne = (data) => {
  return <Select label={data.label} name={data.name} required={data.required} options={data.options}></Select>;
};

export default Form;
