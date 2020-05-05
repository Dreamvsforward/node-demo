const loginCheck = (username, passwork) => {
    // 先使用假数据
    if (username === 'xiaohua' && passwork === '123') {
        return true
    }
    return false
}
module.exports = {
    loginCheck
}