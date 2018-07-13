import React from 'react'
import axios from 'axios'
import { Card, WhiteSpace, WingBlank } from 'antd-mobile'

class Boss extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      data:[]
    }
  }

  componentDidMount(){
    axios.get('/user/list?type=niuren').then(
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
    return (
      <WingBlank>
        <WhiteSpace size="lg" />
        {this.state.data.map(v=>(
          v.user?
          (<div
            key={v._id}>
            <Card>
              <Header
                key={v.user}
                title={v.user}
                thumb={require(`../mainpage/img/${v.type}-act.png`)}
                thumbStyle={{width:'30px'}}
                extra={<span>{v.type}</span>}>
              </Header>
              <Card.Body>
                <div>
                  <h3>职位：产品经理</h3>
                  <h3>薪资：20K</h3>
                  <h3>经验：3年经验</h3>
                </div>
              </Card.Body>
              <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
            </Card>
            <WhiteSpace size="lg" />
          </div>):null
        ))}
      </WingBlank>
    )
  }
}

export default Boss
