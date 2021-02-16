import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button, ButtonProps } from './button';
import "../../styles/index.scss"


export default {
  title: 'Button按钮',
  component: Button,
} as Meta;

const Example: Story<ButtonProps> = (args) => <Button {...args}>Button</Button>;

export const 不同类型的Button = Example.bind({});
不同类型的Button.args = {
  btnType: 'primary',
};


export const 不同大小的Button = Example.bind({});
不同大小的Button.args = {
  size: 'lg',
};
