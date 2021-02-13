import {Button} from './components/Button/button'
import {Alert} from './components/Alert/alert'
import { Menu } from './components/Menu/menu'
import { MenuItem } from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)


function App() {
  return (
    <>
      <Button disabled>disabled</Button>
      <Button onClick={() => alert(123)} btnType={'primary'} >Primary</Button>
      <Button btnType={'Danger'} >Danger</Button>
      <Button onClick={() => alert(123)} size={'Large'} >Large</Button>
      <Button onClick={() => alert(123)} size={'Small'} >small</Button>

      <Button btnType={'Link'} size={'Small'} href='http://www.baidu.com'>Link baidu</Button>
      <div
        style={{
          padding: '20px 40px',
          width: '500px'
        }}
      >
        <h3>
          组件演示
       </h3>
        <Alert
          closable
          title="this is alert!"
          type="default"
        />
      </div>
      <Menu >
        <MenuItem index='0'>
          haha
        </MenuItem>

        <MenuItem index='1'>
          xixi
        </MenuItem>
        <SubMenu title='笑'>
          <MenuItem index='1'>
            xixi
        </MenuItem>
          <MenuItem index='1'>
            xixi
        </MenuItem>

        </SubMenu>

      </Menu>
    </>
  );
}

export default App;
