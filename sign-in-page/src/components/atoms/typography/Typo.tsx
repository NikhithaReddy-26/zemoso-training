

import React from 'react';


import { Typography } from '@mui/material';


export interface TypoProps {
  label: string
  type : 'typo'
  heading : string | any,
  spnItem : string
  variant2 : string
}

const Typo  = ({ label, heading, spnItem, variant2 }:TypoProps) => {
  const headingClass = heading;
  return (
    <Typography variant={headingClass} className={variant2}> {label}
      <span>{spnItem}</span>
    </Typography>
  )
}

export default Typo;


