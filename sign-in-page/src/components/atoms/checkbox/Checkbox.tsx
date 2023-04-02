

import React from 'react';

export interface CheckboxProps {
  type : 'checkbox'
  cls : string
  level : string
}

const Checkbox = ({ level }:CheckboxProps) => {
  const txt = level;
  return (
    <div className='checkboxStyle'>
      <input type='checkbox' className='inp' /> 
      <label> {txt} </label>
    </div>
    
  )
}

export default Checkbox;


