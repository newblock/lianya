import React from 'react'
import axinstance from '../../com/net/axinstance'
import { Card, WhiteSpace, WingBlank } from 'antd-mobile'

class Boss extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      data:[]
    }
  }

  componentDidMount(){

    axinstance.get('/user/list?type=niuren').then(
      res=>{
        if(res.data.code == 0){
          this.setState({data:res.data.data})
        }
      }
    )
  }

  render(){
    console.log(this.state)
    const Header = Card.Header
    const evr = 3000

    return (
      <WingBlank>
        <WhiteSpace size="lg" />
        {this.state.data.map(v=>(
          v.title?
          (<div
            key={v._id}>
            <Card>
              <Header
                key={v.user}
                title={v.user}
                thumb={require(`../mainpage/img/${v.type}-act.png`)}
                thumbStyle={{width:'30px'}}
                // extra={<span>{v.type}</span>}
                extra='eth'
                >
              </Header>
              <Card.Body>
                <div>
                  <h3>职位：{v.title}</h3>
                  <h3>薪资：{v.money} ETH</h3>
                  {/* <h3>月薪: {evr*v.money*0.9}到{evr*v.money*1.1}RMB</h3> */}
                  <h3>经验：{v.desc}</h3>
                </div>
              </Card.Body>
              {/* <Card.Footer content="footer content" extra={<div>extra footer content</div>} /> */}
            </Card>
            <WhiteSpace size="lg" />
          </div>):null
        ))}
        <WhiteSpace size="lg" />
        <WhiteSpace size="lg" />
        <WhiteSpace size="lg" />
      </WingBlank>
    )
  }
}

export default Boss
