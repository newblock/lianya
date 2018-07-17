
import React from 'react'
import { NavBar, InputItem, TextareaItem, Button, WhiteSpace } from 'antd-mobile'
import BossLogo from '../../com/bosslogo/bosslogo'
import axinstance from '../../com/net/axinstance'

class BossInfo extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title:'',
      company:'',
      moneny:'',
      desc:'',
      contact:''
    }
    this.saveInfo = this.saveInfo.bind(this)
    this.skipInfo = this.skipInfo.bind(this)
  }

  onChange(key,val){
    this.setState({
      [key]:val
    })
  }

  saveInfo()
  {

    const title = this.state.title;
    const company = this.state.company;
    const money = this.state.money;
    const desc  = this.state.desc ;
    const contact = this.state.contact;

    console.log('Save pressed :' + title+company+money+desc+contact)

    if(!title||!money||!desc||!contact)
    {
      return alert('请输入必要的招聘信息!')
    }

    const userid = localStorage.getItem("userID");

    axinstance.post('user/update',{userid,title,company,money,desc,contact}).
            then(res=>{
            if(res.status==200&&res.data.code==0)
            {
              console.log("保存数据成功"+res.data.data)
              this.props.history.push("/boss");
            }
            else
            {
              alert("保存失败")
            }
          })
  }

  skipInfo()
  {
    this.props.history.push("/boss");
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
          onChange={(v)=>this.onChange('company',v)}>
          公司名称
        </InputItem>
        <InputItem
          onChange={(v)=>this.onChange('money',v)}>
          职位薪资
        </InputItem>
        <InputItem
          onChange={(v)=>this.onChange('contact',v)}>
          联系方式
        </InputItem>
        <TextareaItem
          onChange={(v)=>this.onChange('desc',v)}
          rows={3}
          autoHeight
          title='职位要求'>
        </TextareaItem>
        <Button type='primary' onClick={this.saveInfo}>
          保存
        </Button>
        <WhiteSpace/>
        <Button onClick={this.skipInfo}>
          跳过(无法使用高级功能)
        </Button>

      </div>
    )
  }
}

export default BossInfo
