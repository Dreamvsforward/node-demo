const {exec} = require('../db/mysql')
const getList = (author, keyword) => {
    // 先返回假数据（格式是正确的）
    const sql = 'select * from blogs where 1=1'
    if (author) {
        sql += `and author='${author}'`
    }
    if (keyword) {
        sql += `and keyword='${keyword}'`
    }
    return exec(sql)
}
const getDetail = (id) => {
    const sql = `select * from blogs where id='${id}'`
    return exec(sql).then(rows => {
        return rows[0]
    })
}
const newBlog = (blogData = {}) => {
    const title = blogData.title
    const content = blogData.content
    const author = blogData.author
    const createtime = Date.now()
    const sql = `insert into blogs (title, content, createtime, author) values ('${title}', '${content}', '${createtime}', '${author}');`
    return exec(sql).then(insertData => {
        console.log('insertData', insertData)
        return {
            id: insertData.insertId
        }
    })
}
const updateBlog = (id, blogData = {}) => {
    const title = blogData.title
    const content = blogData.content
    const sql = `update blogs set title='${title}', content='${content}' where id='${id}';`
    return exec(sql).then(updateData => {
        if (updateData.affectedRows > 0) {
            return true
        }
        return false
    })
}
const delBlog = (id, author) => {
    const sql = `delete from blogs where id='${id}' and author='${author}'`
    return exec(sql).then(delData => {
        if (delData.affectedRows > 0) {
            return true
        }
        return false
    })
}
module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}