import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { AlertProps, Alert } from './alert'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

export default {
    title: 'Alert',
    component: Alert,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<AlertProps> = (args) => <Alert {...args} />;

export const 不同类型的alert = Template.bind({});
不同类型的alert.args = {
    type: 'success',
    title: 'You can use control change commponentType',
    closable: true
};
