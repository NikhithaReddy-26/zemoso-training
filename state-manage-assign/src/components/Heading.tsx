import * as React from 'react';
import { Typography } from '@mui/material';
import './Heading.css';

export interface TextProps {
    level : string
}
  
const Text = ({ level }:TextProps) => {
    const txt = level;
    return (
        <Typography className='candidate-info'>{txt}</Typography>
    )
}

export default Text;