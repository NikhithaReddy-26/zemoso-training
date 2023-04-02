


import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Input, { InputProps } from './Input';
import './Input.css';

export default {
  title: 'Molecules/input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Email = Template.bind({});
Email.args = {
  type: 'input field',
  cls : 'email',
  text : 'abc@gmail.com',
  level : 'E-mail',
  typeOfField : 'text'
};

export const Password = Template.bind({});
Password.args = {
  type: 'input field',
  cls : 'password',
  text : '********',
  level : 'Password',
  typeOfField : 'password'
};



