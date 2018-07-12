
import React from 'react'
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile'
import Logo from '../../com/logo/logo'

//data post action
import axios from 'axios'

class Login extends React.Component
{
  constructor(props){

    super(props);
    this.state = {
      user:'',
      pwd:''
    }

    this.login = this.login.bind(this)
    this.register = this.register.bind(this)
  }

  login()
  {
    console.log('login was press'+this.state)
    //this.props.history.push('/register');

    const user = this.state.user;
    const pwd  = this.state.pwd ;

    if(!user||!pwd)
    {
      return alert('用户密码必须输入')
    }

    axios.post('user/login',{user,pwd}).
      then(res=>{
        if(res.status==200&&res.data.code==0)
        {
          alert("登陆成功"+res.data.data)
          this.props.history.push("/mainpage");
        }
        else
        {
          alert("登陆失败!")
        }
      })
  }

  register()
  {
    console.log('register was press')
  }

  handleChange(key,val)
  {
    this.setState({
      [key]:val
    })
  }

  render(){
    return(
      <div>
        <Logo></Logo>
        <WingBlank>
          <List>
            <InputItem
              onChange={v=>this.handleChange('user',v)}
              >用户</InputItem>
            <InputItem
              onChange={v=>this.handleChange('pwd',v)}
              >密码</InputItem>
          </List>
          <WhiteSpace></WhiteSpace>
          <Button
            type='primary'
            onClick={this.login}
            >登陆</Button>
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
