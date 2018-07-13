
import React from 'react'
import { NavBar, InputItem, TextareaItem, Button } from 'antd-mobile'
import BossLogo from '../../com/bosslogo/bosslogo'
import NiurenLogo from '../../com/niurenlogo/niurenlogo'
import Logo from '../../com/logo/logo'

class BossInfo extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title:''
    }
  }

  onChange(key,val){
    this.setState({
      [key]:val
    })
  }

  render(){
    return(
      <div>
        <NavBar mode="dark">BOSS完善信息</NavBar>
        <BossLogo />
        <InputItem
          onChange={(v)=>this.onChange('title',v)}>
          招聘职位
        </InputItem>
        <InputItem
          onChange={(v)=>this.onChange('title',v)}>
          公司名称
        </InputItem>
        <InputItem
          onChange={(v)=>this.onChange('title',v)}>
          职位薪资
        </InputItem>
        <TextareaItem
          onChange={(v)=>this.onChange('title',v)}
          rows={3}
          autoHeight
          title='职位要求'>
        </TextareaItem>
        <Button type='primary'>
          保存
        </Button>

      </div>
    )
  }
}

export default BossInfo
