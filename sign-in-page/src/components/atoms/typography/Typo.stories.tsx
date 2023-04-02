


import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Typo, { TypoProps } from './Typo';
import './Typo.css'


export default {
  title: 'Atoms/Typo',
  component: Typo,
} as Meta;

const Template: Story<TypoProps> = (args) => <Typo {...args} />;

export const SignIn = Template.bind({});
SignIn.args = {
  label: 'Sign in',
  spnItem : `` ,
  heading:'h4'
};

export const para1 = Template.bind({});
para1.args = {
  label: 'Please enter your login credentials',
  spnItem : `` ,
  heading:'subtitle1'
};

export const para2 = Template.bind({});
para2.args = {
  label: '______________________or______________________',
  spnItem : `` ,
  heading:'subtitle1'
};

export const para3 = Template.bind({});
para3.args = {
  label: `Didn't have an account? `,
  spnItem : `Sign up` ,
  heading:'subtitle1'
};

export const para4 = Template.bind({});
para4.args = {
  label: ``,
  spnItem : `Forgot password?` ,
  heading:'subtitle1'
};




