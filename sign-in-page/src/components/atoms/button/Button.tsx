

import React from 'react';


export interface ButtonProps {
  label: string
  type : 'button'
  color : string
  url? : any
}

const Button = ({ label, color, url }:ButtonProps) => {
  const buttonClass = `button ${color}`;
  return (
    <button className={buttonClass} >
      <div className='buttonStyle'>
        {url}
        <p>{label}</p>
      </div>
      
    </button>
  )
}

export default Button;


