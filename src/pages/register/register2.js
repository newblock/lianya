import React from 'react'
import { connect } from 'react-redux'
import { List, InputItem, Radio, WingBlank, WhiteSpace, Button } from 'antd-mobile'

import Logo from '../../com/logo/logo'
import { registerSuccess, errorMsg } from '../../redux/user.redux'

@connect(
  state=>({userInfo:state}),
  {registerSuccess, errorMsg}
)
class Register extends React.Component
{
  constructor(props){
    super(props)
    this.state = {
      user:'',
      pwd:'',
      repeatpwd:'',
      type:'boss'
    }//OR BOSS
    this.handleRegister = this.handleRegister.bind(this)
  }

  handleRegister()
  {
    console.log(this.props.userInfo)
    const user = this.state.user;
    const pwd = this.state.pwd;
    const type = this.state.type;
    this.props.registerSuccess({user,pwd,type})
  }

  handleChange(key,val)
  {
    this.setState({
      [key]:val
    })
  }

  render(){

    const RadioItem = Radio.RadioItem;

    return(
      <div>
        <Logo></Logo>
        <WingBlank>
          <List>
            <InputItem
              onChange={v=>this.handleChange('user',v)}
              >用户</InputItem>
            <WhiteSpace></WhiteSpace>
            <InputItem
              onChange={v=>this.handleChange('pwd',v)}
              >密码</InputItem>
            <WhiteSpace></WhiteSpace>
            <InputItem
              onChange={v=>this.handleChange('repeatpwd',v)}
              >确认密码</InputItem>
            <WhiteSpace></WhiteSpace>
            <RadioItem
              checked={this.state.type=='genius'}
              onChange={()=>this.handleChange('type','genius')}
              >牛人</RadioItem>
            <RadioItem
              checked={this.state.type=='boss'}
              onChange={()=>this.handleChange('type','boss')}
              >BOSS</RadioItem>
            <Button
              type='primary'
              onClick={this.handleRegister}>注册</Button>
            <WhiteSpace></WhiteSpace>
            <Button>成功结果{this.props.userInfo.user}</Button>
            <Button>失败结果{this.props.userInfo.pwd}</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}

export default Register
