import React from 'react'
import Logo from '../../conponent/logo/logo'
import { List, InputItem, WhiteSpace, WingBlank, Button } from 'antd-mobile';



class Login extends React.Component{
  constructor(props){
    super(props)

    // 比起箭头函数,这个性能相对较好
    this.register = this.register.bind(this)
  }
  
  register(){
    // 只要是路由组件都能使用  
    this.props.history.push('/register')
  }

  render(){
    return (
      <div>
        <Logo></Logo>
        <h2>注册页</h2>
        <WingBlank>
          <List>
            <InputItem type="text"></InputItem>
          </List>
          <WhiteSpace />
          <Button type="primary">登录</Button>
          {/* 简单的空白 */}
          <WhiteSpace />
          <Button onClick={this.register} type="primary">注册</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Login