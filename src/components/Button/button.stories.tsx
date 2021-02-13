import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from './button';
import "../../styles/index.scss"

export default {
  title: 'Button按钮',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Example: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Example.bind({});
Primary.args = {
  btnType: 'primary',
  label:'primary'
};


export const Default = Example.bind({});
Default.args = {
  btnType: 'default',
  label:'default'
};

