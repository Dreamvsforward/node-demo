const { SuccessModel, ErrorModel } = require('../model/resModel')
const {
    loginCheck
} = require('../controller/user')
const handleUserRouter = (req, res) => {
    const method = req.method // GET POST
    console.log('path', req.path)
    console.log('method', method)
    if (method === 'POST' && req.path === '/api/user/login') {
        const {username, password} = req.body
        const result = loginCheck(username, password)
        return result.then(data => {
            if (data) {
                return new SuccessModel()
            } else {
                console.log('到达返回结束')
                return new ErrorModel('登录失败')
            }
        })
        // const result = loginCheck(username, password)
        // if (result) {
        //     return new SuccessModel()
        // }
        // return new ErrorModel()
    }
}
module.exports = handleUserRouter