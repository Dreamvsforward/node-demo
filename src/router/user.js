const { SuccessModel, ErrorModel } = require('../model/resModel')
const {
    loginCheck
} = require('../controller/user')
const handleUserRouter = (req, res) => {
    const method = req.method // GET POST
    const url = req.url
    const path = url.split('?')[0]
    if (method === 'POST' && path === '/api/user/login') {
        const {username, password} = req.body
        const result = loginCheck(username, password)
        if (result) {
            return new SuccessModel()
        }
        return new ErrorModel()
    }
}
module.exports = handleUserRouter