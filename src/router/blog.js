const {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
} = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')
const handleBlogRouter = (req, res) => {
    const method = req.method // GET POST
    const url = req.url
    const path = url.split('?')[0]
    const id = req.query.id

    // 获取博客列表
    if (method === 'GET' && path === '/api/blog/list') {
        const author = req.query.author
        const keyword = req.query.keyword
        const result = getList(author, keyword)
        return result.then(listData => {
            console.log('listData', listData)
            return new SuccessModel(listData)
        })
        // let listData = getList(author, keyword)
    }
    
    // 获取一篇博客的内容
    if (method === 'GET' && path === '/api/blog/detail') {
        const result = getDetail(id)
        return result.then(data => {
            return new SuccessModel(data)
        })
    }

    // 新增一篇博客
    if (method === 'POST' && path === '/api/blog/new') {
        return newBlog(req.body).then(insertData => {
            return new SuccessModel(insertData)
        })
    }

    // 更新一篇博客
    if (method === 'POST' && path === '/api/blog/update') {
        const result = updateBlog(id, req.body)
        return result.then(val => {
            console.log('val', val)
            if (val) {
                return new SuccessModel()
            } else {
                return new ErrorModel('更新博客失败')
            }
        })
    }

    // 删除一篇博客    
    if (method === 'POST' && path === '/api/blog/del') {
        const author = 'zhangsan' // 假数据，待开发登录时再改成真数据
        const result = delBlog(id, author)
        return result.then(val => {
            if (val) {
                return new SuccessModel()
            } else {
                return new ErrorModel('删除博客失败')
            }
        })
    }

}
module.exports = handleBlogRouter