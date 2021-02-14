import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Input, InputProps } from './input';
import "../../styles/index.scss"


export default {
  title: 'Input输入',
  component: Input,
} as Meta;

const Example: Story<InputProps> = (args) => <Input {...args} />;

export const 带前后缀的Input = Example.bind({});
带前后缀的Input.args = {
 prepend: 'www.',
 append:'.com'
};


export const 不同大小的Input = Example.bind({});
不同大小的Input.args = {
  size: 'lg',
};
