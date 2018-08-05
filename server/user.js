const express = require('express')
const Router = express.Router()


Router.get('/info', function(req, res){
  // 用户有咩有cookie
  return res.json({code: 1,status: 200})
})

module.exports = Router  