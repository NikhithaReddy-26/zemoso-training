


import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Checkbox, { CheckboxProps } from './Checkbox';
import './Checkbox.css'

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
} as Meta;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const checkbox1 = Template.bind({});
checkbox1.args = {
  type: 'checkbox',
  level : 'Remember me'
};
