import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Button, ButtonProps } from './button'
import "../../styles/index.scss"

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const 不同类型的按钮 = Template.bind({});
不同类型的按钮.args = {
  btnType: 'primary',
  label:'Button'
};

export const 不同大小的按钮 = Template.bind({});
不同大小的按钮.args = {
  size: 'lg',
  label:'Button'
};

