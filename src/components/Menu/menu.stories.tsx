import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { MenuProps, Menu } from './menu'
import {  MenuItem } from './menuItem'
import { SubMenu } from './subMenu'

export default {
    title: 'Menu菜单',
    component: Menu,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    subcomponents:{MenuItem ,SubMenu}
} as Meta;


const Example: Story<MenuProps > = (args , itemargs) => 
    <Menu {...args} >
        <MenuItem index='1' >菜单1</MenuItem>
        <MenuItem index='2' >菜单2</MenuItem>
        <SubMenu title='下拉菜单'>
            <MenuItem index='3' >菜单1</MenuItem>
            <MenuItem index='4' >菜单2</MenuItem>
        </SubMenu>
    </Menu>


export const 菜单 = Example.bind({});
菜单.args = {
    mode:'horizontal',
};
