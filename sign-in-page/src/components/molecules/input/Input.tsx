

import React from 'react';

export interface InputProps {

  type : 'input field'
  cls : string
  text : string
  level : string
  typeOfField : string
}

const Input = ({ cls, text, level, typeOfField }:InputProps) => {
  const inputClass = `input ${cls}`;
  const Text = text;
  const txt = level;
  const typeText = typeOfField;
  return (
    <label>{txt}
      <input type={typeText} className={inputClass} placeholder={Text} />
    </label>
  )
}

export default Input;


