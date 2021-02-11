import React, { FC, useState } from 'react'
import classNames from 'classnames'
import Transition from '../Transition/transition'
import Icon from '../Icon/icon'


export type AlertType = 'success' | 'default' | 'danger' | 'warning'

export interface AlertProps {
    title: string;
    description?: string;
    type?: AlertType;
    onClose?: () => void;
    closable?: boolean;
}

const Alert: FC<AlertProps> = (props) => {
    const [hide, setHide] = useState(false)
    const {
        title,
        description,
        type,
        onClose,
        closable,
        children
    } = props
    const classes = classNames('grace-alert', {
        [`grace-alert-${type}`]: type,
    })

    const titleClass = classNames('grace-alert-title', {
        'bold-title': description
    })

    const handleClose = (e: React.MouseEvent) => {
        if (onClose) {
            onClose()
        }
        setHide(true)
    }


    return (
        <Transition
            in={!hide}
            timeout={300}
            animation="zoom-in-top"
        >
            <div className={classes}>
                <span className={titleClass}>{title ? title : children}</span>
                {description && <p className="grace-alert-desc">{description}</p>}
                {closable && <span className="grace-alert-close" onClick={handleClose}><Icon icon="times" /></span>}
            </div>
        </Transition>

    )

}

Alert.defaultProps = {
    type: 'default',
    closable: true,
}
export default Alert;