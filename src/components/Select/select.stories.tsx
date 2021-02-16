import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import {SelectProps} from './select'
import Select from './index'
import "../../styles/index.scss"

export default {
  title: 'Select选择框',
  component: Select,
} as Meta;

const Example: Story<SelectProps> = (args) => <Select
  {...args}
>
  <Select.Option value="nihao" />
  <Select.Option value="nihao2" />
  <Select.Option value="nihao3" />
  <Select.Option value="disabled" disabled />
  <Select.Option value="nihao5" />
</Select>;

export const  select选择框 = Example.bind({});
select选择框.args = {
  placeholder: "请选择"
};


export const 支持多选的Select = Example.bind({});
支持多选的Select.args = {
  placeholder: "支持多选欧！",
  multiple: true
};

export const 被禁用的Select = Example.bind({});
被禁用的Select.args = {
  placeholder: "禁用啦！",
  disabled:true
};
