import React from 'react'
import { List, InputItem, Radio, WingBlank, WhiteSpace, Button } from 'antd-mobile'
import Logo from '../../com/logo/logo'

//data post action
import axinstance from '../../com/net/axinstance'


class Register extends React.Component
{
  constructor(props){
    super(props)
    this.state = {
      user:'',
      pwd:'',
      repeatpwd:'',
      type:'niuren'//OR boss
    }
  }

  handleRegister()
  {
    const user = this.state.user;
    const pwd = this.state.pwd;
    const type = this.state.type;
    const repeatpwd = this.state.repeatpwd;

    console.log({user, pwd, type})

    if(!user||!pwd||!type){
      return alert('用户密码必须输入')
    }

    if(pwd != repeatpwd){
      return alert('密码和确认密码不同')
    }

    console.log("time" + new Date())

    axinstance.post('user/register',{user,pwd,type}).
      then(res=>{
        if(res.status==200&&res.data.code==0)
        {
          console.log("写入数据成功"+res.data.data)

          console.log("userID" + res.data.data._id)
          localStorage.setItem("userID",res.data.data._id);

          if(type == "boss")
          {
            this.props.history.push("/bossinfo");
          }
          else if(type == "niuren")
          {
            this.props.history.push("/niureninfo");
          }
        }
        else
        {
          alert("写入数据失败")
        }
      })
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
              >账户名</InputItem>
            <InputItem
              onChange={v=>this.handleChange('pwd',v)}
              >密码</InputItem>
            <InputItem
              onChange={v=>this.handleChange('repeatpwd',v)}
              >确认密码</InputItem>
            <RadioItem
              checked={this.state.type=='niuren'}
              onChange={()=>this.handleChange('type','niuren')}
              >我是牛人(找公司)</RadioItem>
            <RadioItem
              checked={this.state.type=='boss'}
              onChange={()=>this.handleChange('type','boss')}
              >我是BOSS(挖人才)</RadioItem>
            <Button
              type='primary'
              onClick={()=>this.handleRegister()}>注册</Button>
            {/* <WhiteSpace></WhiteSpace>
            <Button>成功结果{this.state.user}</Button>
            <Button>失败结果{this.state.type}</Button> */}

          </List>
        </WingBlank>
      </div>
    )
  }
}

export default Register
