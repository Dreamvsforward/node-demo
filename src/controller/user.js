const {exec} = require('../db/mysql')
const login = (username, passwork) => {
    const sql = `
        select username, realname from users where username='${username}' and password='${passwork}'
    `
    return exec(sql).then(rows => {
        console.log('rows', rows[0])
        return rows[0] || {}
    })
    // // 先使用假数据
    // if (username === 'xiaohua' && passwork === '123') {
    //     return true
    // }
    // return false
}
module.exports = {
    login
}