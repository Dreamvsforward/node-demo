const evn = process.env.NODE_ENV // 环境参数

// 配置
let MYSQL_CONF

if (evn === 'dev') {
    // mysql
    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: '123456',
        port: '3306',
        database: 'myblog'
    }
}

if (evn === 'production') {
     // mysql
     MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: '123456',
        port: '3306',
        database: 'myblog'
    }
}
 module.exports = {
    MYSQL_CONF
 }
