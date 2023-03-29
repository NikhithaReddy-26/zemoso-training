import React from "react";
import { ComponentStory,ComponentMeta } from "@storybook/react";
import Button, {ButtonProps} from './button';

export default {
    title: 'Atoms/Button',
    component: Button,
  } as ComponentMeta<typeof Button>;

  const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

  export const Primary = Template.bind({});
  Primary.args = {
    label: 'Primary',
    type: 'button',
    color : 'primary'
  };
  
  export const Secondary = Template.bind({});
  Secondary.args = {
    label: 'Secondary',
    type: 'button',
    color : 'secondary'
  };
  
  
  export const Success = Template.bind({});
  Success.args = {
    label: 'Success',
    type: 'button',
    color : 'success'
  
  };
  
  
  export const Danger = Template.bind({});
  Danger.args = {
    label: 'Danger',
    type: 'button',
    color : 'danger'
  };
  
  
  