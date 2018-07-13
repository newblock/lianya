const express = require('express')
const Router = express.Router()
const utils = require('utility')

const model = require('./module')
const User = model.getModel('user')

const _filter = {'pwd':0, '__v':0}

//返回所有用户数据,json格式
Router.get('/list',function(req,res){
  //清空用户数据表
  //User.remove({},function(e,d){})

  const { type } = req.query ;

  User.find({type},function(err,doc){
    return res.json({code:0,data:doc})
  })
})

Router.post('/register', function(req, res){
  console.log(req.body)
  const {user, pwd, type} = req.body

  User.findOne({user},function(err,doc){
    if(doc){
      return res.json({code:1, msg:'用户名重复'})
    }
    User.create({user,type,pwd:md5Pwd(pwd)},function(e,d){
      if(e){
        return res.json({code:1,msg:'后端出错了'})
      }
      return res.json({code:0})
    })
  })
})

Router.post('/login',function(req,res){
    const {user, pwd} = req.body

    User.findOne({user,pwd:md5Pwd(pwd)},_filter,function(err,doc){
      if( !doc )
      {
        return res.json({code:1, msg:'用户名或密码错误!'})
      }
      res.cookie('userid',doc._id)
      return res.json({code:0,data:doc})
    })
})

function md5Pwd(pwd){
  const salt = 'imooc_is_good_435323x8!#$@IU~~'
  return utils.md5(utils.md5(salt+pwd))
}

module.exports = Router
