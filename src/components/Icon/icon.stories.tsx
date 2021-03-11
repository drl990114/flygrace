import { Story, Meta } from '@storybook/react/types-6-0';
import { Icon ,IconProps} from './icon';
import "../../styles/index.scss"


export default {
  title: 'Icon图标',
  component: Icon,
} as Meta;

const Example: Story<IconProps> = (args) => <Icon {...args} />;

export const 对勾 = Example.bind({});
对勾.args = {
    theme: 'primary',
    icon: "check",
    size: "3x"
};

export const 关闭 = Example.bind({});
关闭.args = {
    theme: 'danger',
    className: "close",
    size: "3x"
};

