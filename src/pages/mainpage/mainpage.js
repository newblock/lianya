
import React from 'react'
import { NavBar, TabBar, Button} from 'antd-mobile'
import { Switch, Route } from 'react-router-dom'
import Boss from '../boss/boss'
import Niuren from '../niuren/niuren'
import Me from '../me/me'


// function Msg(){
//   return <h2>消息组件</h2>
// }


class MainPage extends React.Component{

  render()
  {
    console.log(this.props.location)
    const {pathname} = this.props.location;
    const navList = [
      {
        path:'/niuren',
        text:'牛人',
        icon:'niuren',
        title:'职位列表',
        component:Niuren,
        hide:false
      },
      {
        path:'/boss',
        text:'BOSS',
        icon:'boss',
        title:'牛人列表',
        component:Boss,
        hide:false
      },
      // {
      //   path:'/msg',
      //   text:'消息',
      //   icon:'msg',
      //   title:'消息列表',
      //   component:Msg,
      //   hide:false
      // },
      {
        path:'/me',
        text:'我的',
        icon:'me',
        title:'我的',
        component:Me,
        hide:false
      }
    ]

    // return(
    //   <Button onClick={()=>this.click()}>测试</Button>
    // )


    return(
      // <div style={{ position: 'fixed', height: '80%', width: '100%', top: 0 }}>
      <div>

        <NavBar className='fixed-header' mode='dard'>
          {navList.find(v=>v.path==pathname).title}
        </NavBar>

        <div style={{marginTop:'45px'}}>
        <Switch>
          {navList.map(v=>(
            <Route key={v.path} path={v.path} component = {v.component}/>
          ))}
        </Switch>
        </div>

        <TabBar>
          {navList.map(v=>(
            <TabBar.Item
              key={v.path}
              title={v.text}
              selected={v.path===pathname}
              icon={{uri:require(`./img/${v.icon}.png`)}}
              selectedIcon={{uri:require(`./img/${v.icon}-act.png`)}}
              onPress={()=>{this.props.history.push(v.path)}}
            >
            </TabBar.Item>
          ))}
        </TabBar>
      </div>

    )
  }
}

export default MainPage
