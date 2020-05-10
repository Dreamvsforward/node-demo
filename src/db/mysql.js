const {MYSQL_CONF} = require('../config/db')
var mysql = require('mysql');
// 创建连接对象
var connection = mysql.createConnection(MYSQL_CONF);
// 开始连接
connection.connect();
// const sql = 'select * from users;'
// 执行统一sql的函数
function exec (sql) {
    const promise = new Promise((resolve, reject) => {
        connection.query(sql, (error, results, field) => {
            if (error) {
                reject(error)
                return
            };
            resolve(results)
        })
    })
    return promise
}
module.exports = {
    exec
}
// 结束连接
// connection.end();