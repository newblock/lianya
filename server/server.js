const express = require('express')
const bodyParser = require('body-parser')
const userRouter = require('./act-user')
const cookieParser = require('cookie-parser')

const app = express()
app.use(cookieParser())
app.use(bodyParser.json())
//设置user根路由
app.use('/user',userRouter)

app.listen(9093,function(){
  console.log('Node app start at port 9093');
})
