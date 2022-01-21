import Mock from 'mockjs'
import mockFetch from 'mockjs-fetch'
mockFetch(Mock)

// 接口服务器地址
let domain = 'http://localhost/api/admin/'

// 登录
Mock.mock(domain + 'login', {
    code: 200,
    msg: 'OK',
    data: {
        nickname: '兔子先生',
        accessToken: 'fqh0i-LyINZ-RvK5d-Akj3a-uBYRl',
    }
})

// 提交数据，由于GET请求url传参不固定，所以使用正则匹配
Mock.mock(/getData/, 'get', {
    code: 200,
    msg: '数据提交成功',
    data: {}
})