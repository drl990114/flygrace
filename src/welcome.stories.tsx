import { storiesOf } from '@storybook/react'

const Introduced = 'import { Button } from "flygrace"'
storiesOf('欢迎来到flygrace', module)
  .add('welcome', () => {
    return (
      <>
        <h2 style={{ fontWeight: 'bold' }}>欢迎使用flygrace组件库</h2><br />
        <h2 style={{ fontWeight: 'bold' }}>轻量 ， 优雅 ， 便于使用</h2><br />

        <h3>安装试试</h3><br />

        <pre style={{color: 'purple'}}> npm install flygrace --save </pre><br />

        <h3>使用：</h3><br />

        <span>引入样式</span>
        <pre style={{color: 'purple'}}>import 'flygrace/dist/index.css'</pre><br />

        <span>引入组件</span>
        <pre style={{color: 'purple'}}>{Introduced}</pre>
      </>
    )
  })
