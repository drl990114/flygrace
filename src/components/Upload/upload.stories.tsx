import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Upload, UploadProps } from './upload'
import Button from '../Button'
import Icon from '../Icon'
import "../../styles/index.scss"


export default {
  title: 'Upload上传组件',
  component: Upload,
} as Meta;

const Example: Story<UploadProps> = (args) => <Upload
  {...args}
>
  <Button size="lg" btnType="primary"><Icon icon="upload" /> 点击上传 </Button>
</Upload>;

export const Upload上传组件 = Example.bind({});
const checkFileSize = (file: File) => {
  if (Math.round(file.size / 1024) > 50) {
    alert('file too big')
    return false;
  }
  return true;
}
Upload上传组件.args = {
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  name: "fileName",
  beforeUpload: checkFileSize,
};
