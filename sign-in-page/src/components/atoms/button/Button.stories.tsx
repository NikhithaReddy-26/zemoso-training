import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Button, { ButtonProps } from './Button';
import './Button.css'

import google from '../../../images/Google.svg';



export default {
  title: 'Atoms/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const SignIn = Template.bind({});
SignIn.args = {
  label: 'Sign in',
  type: 'button',
  color : 'sign-in',
  
};

export const SignInWithGoogle = Template.bind({});
SignInWithGoogle.args = {
  label: 'Sign in with Google',
  type: 'button',
  color : 'signinwithgoogle',
  url : google
};

export const SignInWithGithub = Template.bind({});
SignInWithGithub.args = {
  label: 'Sign in with Github',
  type: 'button',
  color : 'signinwithgithub',

};
