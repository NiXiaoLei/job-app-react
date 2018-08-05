import React, { Component } from 'react';
import { List, InputItem, Radio, WhiteSpace, WingBlank, Button } from 'antd-mobile';
import Logo from '../../conponent/logo/logo'


class Register extends Component {
  constructor(props){
    super(props)

    this.state = {
      type: 'genius'
    }
    // 比起箭头函数,这个性能相对较好
    this.register = this.register.bind(this)
  }


  register(){
    // 只要是路由组件都能使用  
    this.props.history.push('/register')
  }
  
  render() {
    const RadioItem = Radio.RadioItem;
    return (
      <div>
        <Logo></Logo>
        <List>
          <h2>注册页</h2>
          <WingBlank>
            <InputItem>用户名</InputItem>
            <WhiteSpace />
            <InputItem>密码</InputItem>
            <WhiteSpace />
            <InputItem>确认密码</InputItem>
            <WhiteSpace />
            <RadioItem checked={this.state.type == 'genius'}>
              牛人
            </RadioItem>
            <RadioItem checked={this.state.type == 'boss'}>
              Boss
            </RadioItem>
          </WingBlank>
          <WhiteSpace />
          <Button type="primary">注册</Button>
        </List>
      </div>
    );
  }
}

export default Register;
