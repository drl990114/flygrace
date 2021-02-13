import React,{FC , ButtonHTMLAttributes , AnchorHTMLAttributes} from 'react'
import classNames from 'classnames'

export type ButtonSize = 'lg' | 'sm'
export type ButtonType = 'primary' | 'default' | 'danger' | 'link'


interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    btnType?: ButtonType;
    label?:string;
    href?: string;
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

export const Button: FC<ButtonProps> = (props) => {
    const {
        disabled,
        className,
        size,
        btnType,
        label,
        href,
        ...restProps
    } = props

    const classes = classNames('btn', className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'disabled': (btnType === 'link') && disabled
    })

    if (btnType === 'link' && href) {
        return (
            <a
                className={classes}
                href={href}
                {...restProps}
            >
                {label}
            </a>
        )
    } else {
        return (
            <button
                className={classes}
                disabled={disabled}
                {...restProps}
            >
                {label}
            </button>
        )
    }
}

Button.defaultProps = {
    disabled: false,
    btnType: 'default'
}
