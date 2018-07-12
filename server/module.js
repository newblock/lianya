const mongoose = require('mongoose')

//设置数据库访问端口和数据库名称:为lianya
const DB_URL = 'mongodb://127.0.0.1:27017/lianya'
mongoose.connect(DB_URL);
mongoose.connection.on('connected',function(){
  console.log('mongo connect success!');
})

//数据表配置文件
const models = {
  user:{
    'user':{type:String, require:true},
    'pwd' :{type:String, require:true},
    //BOSS 或是牛人
    'type':{type:String, require:true},
    'avatar':{type:String},
    //个人简介
    'desc':{'type':String},
    //职位名称
    'title':{'type':String},
    //如果为Boss
    'company':{'type':String},
    'money':{'type':String}
  },
  char:{
  }
}

//遍历配置文件，在数据库中生成数据表
for( let m in models)
{
  mongoose.model(m, new mongoose.Schema(models[m]))
}

//导出个对象：getModel可以获取函数，此函数通过数据表名称返回数据表
//例如：参数name可以传user返回用户数据表,传chat返回聊天数据表
module.exports = {
  getModel:function(name){
    return mongoose.model(name)
  }
}
