/**
 * Created by asus on 2018/4/21.
 */
const User = require('../model/User.js')
/**
 * 监听psot
 */
exports.sigin = (req, res, next) => {
    const promise= User.findOne({username:'小明',password:'998'}).exec()
    promise.then(doc =>{
        // 查询到数据时调用 doc就是查到的数据
        console.log('查询成功')
        console.log(doc)


    })
    promise.catch(err =>{
        // 查询失败时调用/
        console.log('查询失败')

    })
    res.send('恭喜你,成功的认识了我,可以称呼我为z先生')
}

exports.cheack = (req, res, next) => {
    res.send('恭喜你,成功的认识了我,可以称呼我为z先生')
}
