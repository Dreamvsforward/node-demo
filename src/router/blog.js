const {
    getList
} = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')
const handleBlogRouter = (req, res) => {
    const method = req.method // GET POST
    const url = req.url
    const path = url.split('?')[0]

    // 获取博客列表
    if (method === 'GET' && path === '/api/blog/list') {
        const author = req.query.author
        const keyword = req.query.keyword
        let listData = getList(author, keyword)
        return new SuccessModel(listData)
    }
    
    // 获取一篇博客的内容
    if (method === 'GET' && path === '/api/blog/detail') {
        return {
            msg: '这是获取一篇博客的内容'
        }
    }

    // 新增一篇博客
    if (method === 'POST' && path === '/api/blog/new') {
        return {
            msg: '这是新增一篇博客'
        }
    }

    // 更新一篇博客
    if (method === 'POST' && path === '/api/blog/update') {
        return {
            msg: '更新一篇博客'
        }
    }

    // 删除一篇博客    
    if (method === 'POST' && path === '/api/blog/del') {
        return {
            msg: '删除一篇博客'
        }
    }

}
module.exports = handleBlogRouter