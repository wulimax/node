/**
 * Created by asus on 2018/4/21.
 */
const express = require('express');
const bodyParser = require('body-parser') //处理post请求
const session = require('express-session')//处理session

const config = require('./config/config.js')//引入配置文件
const router = require('./routers/router.js')//引入路由中间键
const app = express()
//配置session
const sessionOptions = {
    secret: 'hell world',
    resave: false,
    saveUninitialized:true,
    cookie:{maxAge: 7 * 24 * 3600 * 1000}
}
//静态文件夹
app.use(express.static('./www'))//静态文件文件夹
/**
 * 中间键
 */
app.use(session(sessionOptions))
//请求体处理中间键
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(router)  //加载路由中间键
/**
 * 监听3000 端口
 */
app.listen(config.PORT, err => {
    if (err) {
        //如果监听失败将停止
        return console.log('启动失败')
    }
    console.log('起动成功')
})