import React, { FC,CSSProperties ,useState, createContext } from 'react'
import classNames from 'classnames'
import {MenuItemProps} from './menuItem'

type MenuMode = 'horizontal' | 'vertical'

export interface MenuProps {
  //默认 active 的菜单项的索引值
  defaultIndex ?: string;
  className ?: string;
  mode ?: MenuMode;
  style ?: CSSProperties;
  onSelect ?: (selectedIndex : string) => void;
  defaultOpenSubMenus ?: string[];

}

interface IMenuContext {
  index: string;
  onSelect?: (selectedIndex: string) => void;
  mode?: MenuMode;
  defaultOpenSubMenus?: string[];  
}

export const MenuContext = createContext<IMenuContext> ({index:'0'})


export const Menu: FC<MenuProps> = (props) => {
  const { 
    className, 
    mode,
    style,
    children,
    defaultIndex,
    defaultOpenSubMenus,
    onSelect
  } = props
  const [currentActive, setActive] = useState(defaultIndex)
 
  const classes = classNames('grace-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical'
  })

  const handleClick = (index: string) =>{
    setActive(index)
    if(onSelect) {
      onSelect(index)
    }
  }

  //定义context
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : '0',
    onSelect: handleClick,
    mode,
    defaultOpenSubMenus,
  }
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      const { displayName } = childElement.type
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(childElement, {
          index: index.toString()
        })
      } 
    })
  }

  return (
    <ul className={classes} style={style} >
      <MenuContext.Provider value={passedContext}>
      {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: '0',
  mode: 'horizontal',
  defaultOpenSubMenus: [],
}

export default Menu;