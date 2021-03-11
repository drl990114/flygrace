import React, { FC } from 'react'
import classNames from 'classnames'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'

export interface IconProps extends FontAwesomeIconProps {
    /** 支持框架主题 根据主题显示不同的颜色 */
    theme?: ThemeProps
}

/**
 * Icon 图标
 * 
 * ~~~js
 * // 这样引用
 * import { Icon } from 'flygrace'
 * ~~~
 * 
 * 支持 Font Awesome 的所有基本属性 http://www.fontawesome.com.cn/
 * 
 * props中icon属性传递图标名即可
 */
export const Icon: FC<IconProps> = (props) => {
    // icon-primary
    const { className, theme, ...restProps } = props
    const classes = classNames('grace-icon', className, {
        [`icon-${theme}`]: theme
    })
    return (
        <FontAwesomeIcon className={classes} {...restProps} />
    )
}

export default Icon;