/**
 * Created by asus on 2018/4/21.
 * 所有路由配置文件代码
 * 路由中间键
 */
const express = require('express')
const login = require('../controllers/login.js')
const router = express.Router()

router.post('/login',login.sigin)



//暴露路由对象
module.exports = router
