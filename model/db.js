/**
 * Created by asus on 2018/4/21.
 */
const mongoose = require('mongoose')


// 连接数据库,这里由于只需要连接一次,内部会帮我们自动管理连接状态
mongoose.connect('mongodb://127.0.0.1:27017/crazy')