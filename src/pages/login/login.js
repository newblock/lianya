
import React from 'react'
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile'
import Logo from '../../com/logo/logo'

//data post action
import axinstance from '../../com/net/axinstance'

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

    axinstance.post('user/login',{user,pwd}).
      then(res=>{
        if(res.status==200&&res.data.code==0)
        {
          console.log(res.data.data)
          alert("登陆成功"+res.data.data)
          if(res.data.data.type == "boss")
          {
            this.props.history.push("/boss");
          }
          else if(res.data.data.type == "niuren")
          {
            this.props.history.push("/niuren");
          }

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
    this.props.history.push("/register");
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
              >账号</InputItem>
            <WhiteSpace></WhiteSpace>
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
