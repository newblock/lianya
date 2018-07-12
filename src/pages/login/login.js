
import React from 'react'

import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile'
import Logo from '../../com/logo/logo'

import { Redirect } from 'react-router-dom'


class Login extends React.Component
{
  constructor(props){

    super(props);
    this.state = {
      user:'',
      pwd:''
    }

    this.register = this.register.bind(this)
  }

  register()
  {
    console.log('register was press'+this.props)
    //this.props.history.push('/register');
  }

  render(){
    return(
      <div>
        <Logo></Logo>
        <WingBlank>
          <List>
            <InputItem>用户</InputItem>
            <InputItem>密码</InputItem>
          </List>
          <WhiteSpace></WhiteSpace>
          <Button type='primary'>登陆</Button>
          <WhiteSpace></WhiteSpace>
          <Button
            type='primary'
            onClick={this.register}
            >注册</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Login
