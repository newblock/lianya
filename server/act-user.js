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
  User.find({type}, _filter ,function(err,doc){
    return res.json({code:0,data:doc})
  })
})

Router.post('/update',function(req,res){
  // const userid = req.cookies.userid
  // if(!userid){
  //   return res.json({code:1})
  // }
  // const body = req.body

  const userid = req.body.userid
  if(!userid){
    return res.json({code:1})
  }
  const body = req.body

  User.findByIdAndUpdate(userid,body,function(err,doc){
    const data = Object.assign({},{
      user:doc.user,
      type:doc.type
    },body)
    return res.json({code:0,data})
  })
})

Router.post('/register', function(req, res){
  console.log(req.body)
  const {user, pwd, type} = req.body

  User.findOne({user},function(err,doc){
    if(doc){
      return res.json({code:1, msg:'用户名重复'})
    }
    const userModel = new User({user,type,pwd:md5Pwd(pwd)})

    userModel.save(function(e,d){
      if(e){
        return res.json({code:1,msg:'后端出错了'})
      }
      const {user, type, _id} = d
      res.cookie('userid',_id)
      return res.json({code:0,data:{user, type, _id}})
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



Router.get('/info',function(req, res){
	const {userid} = req.cookies
	if (!userid) {
		return res.json({code:1})
	}
	User.findOne({_id:userid} ,_filter , function(err,doc){
		if (err) {
			return res.json({code:1, msg:'后端出错了'})
		}
		if (doc) {
			return res.json({code:0,data:doc})
		}
	})
	// 用户有没有cookie
})


function md5Pwd(pwd){
  const salt = 'imooc_is_good_435323x8!#$@IU~~'
  return utils.md5(utils.md5(salt+pwd))
}


module.exports = Router
