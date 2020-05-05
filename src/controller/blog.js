const getList = (author, keyword) => {
    // 先返回假数据（格式是正确的）
    return [
        {
            id: '1',
            title: '标题1',
            content: '内容1'
        },
        {
            id: '2',
            title: '标题2',
            content: '内容2'
        }
    ]
}
module.exports = {
    getList
}