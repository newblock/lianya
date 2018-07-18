
import React from 'react'
import {Result, Button, WhiteSpace, Modal} from 'antd-mobile'


class Me extends React.Component{

  constructor(props){
    super(props)

    this.logout = this.logout.bind(this)
    this.login = this.login.bind(this)
    this.finishInfo = this.finishInfo.bind(this)
    this.handleLogout = this.handleLogout.bind(this)

    const uID = localStorage.getItem("userID")

    this.state = {
      isLogin : uID ? true : false
    }
  }

  logout()
  {

    Modal.alert('注销', '确认退出登录吗?', [
      {text:'取消', onPress:() => console.log('cancel')},
      {text:'确认', onPress:() =>{
        this.handleLogout()
      }}
    ])
  }

  handleLogout()
  {
    localStorage.clear()
    this.setState(
      {
        isLogin:false
      }
    )
  }

  login()
  {
    this.props.history.push("/login");
    return
  }

  finishInfo()
  {
    const type  = localStorage.getItem("type")
    console.log("type: ",type)
    var ok = (type == "niuren")
    console.log("ok: ",ok)
    var  path = !(type=="niuren") ? "/bossinfo" : "/niureninfo"
    console.log("path: ",path)
    this.props.history.push(path);
    return
  }

  render(){

    var isLogin = this.state.isLogin;
    var headName = isLogin ? 'me-act' : 'me'

    var title = localStorage.getItem("title")
    var msg = localStorage.getItem("desc")
    console.log('title:', title)

    var finishBtnStyle = 'default'
    var finishBtnText  = '更新资料'
    if( title == "undefined" )
    {
      title = localStorage.getItem("user")
      msg   = "请完善个人资料"
      finishBtnStyle = 'primary'
      finishBtnText = '完善资料'
    }


    return isLogin?(
      <div>
        <Result
					img={<img src={require(`../mainpage/img/${headName}.png`)} style={{width:50}} alt="" />}
					title={title}
					message={msg}
				/>
        <WhiteSpace></WhiteSpace>
        <Button type={finishBtnStyle} onClick={this.finishInfo}>
          {finishBtnText}
        </Button>
        <Button onClick={this.logout}>
          注销
        </Button>
      </div>
    ):(
      <div>
        <Result
          img={<img src={require(`../mainpage/img/${headName}.png`)} style={{width:50}} alt="" />}
          title="链涯"
          message="请先登录"
        />
        <WhiteSpace></WhiteSpace>
        <Button type='primary' onClick={this.login}>
          登陆
        </Button>
      </div>
    )
  }
}

export default Me
