/**
 * Created by asus on 2018/4/21.
 */
const mongoose = require('mongoose')
require('./db.js')

// 设置数据结构(限制条件)
const userSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    created: {
        type: Date,
        default: Date.now
    }
})

// 创建Model
const User = mongoose.model('user', userSchema, 'admin')

// 暴露模型
// exports = User
module.exports = User
