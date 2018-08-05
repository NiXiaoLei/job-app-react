const mongoose = require('mongoose')
// 连接 mongoose  并且使用imooc 这个集合
const DB_URL = 'mongodb://localhost:27017/imooc'
mongoose.connect(DB_URL)


// 类似于 mysql 的表  mongo里有文档, 字段的概念
const User = mongoose.model('user', new mongoose.Schema({
  user: { type:String, require: true },
  age: { type:Number, require: true }
}))



// 新增数据
User.create({
  user: 'imooc',
  age: 12
},(err, doc)=>{
  console.log(err ? err : doc)
})


