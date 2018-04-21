/**
 * Created by asus on 2018/4/21.
 * 生产环境和开发环境配置根据环境变量NODE_ENV
 */
//开发环境
const configDev = {
    PORT : 3000
}
//生产环境
const configProd = {
    PORT: 8888
}
// 公共配置
const config = {

}
//根据NODE_ENV 判断是生成环境还是开发环境
if(process.env.NODE_ENV === 'production'){
    //将configProd 的属性赋值给config对象,并且会覆盖config中的同名属性
    Object.assign(config,configProd)
}else{
    Object.assign(config,configDev)
}
console .log(process.env.NODE_ENV)//环境变量
//暴露config对象
module.exports = config
