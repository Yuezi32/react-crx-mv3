/**
 * 反向代理配置
 */
 const { createProxyMiddleware } = require('http-proxy-middleware');
 module.exports = function (app) {
     app.use(
         // 开发环境API路径匹配规则
         '^/api',
         createProxyMiddleware({
             // 要代理的真实接口API域名
             target: 'http://localhost',
             changeOrigin: true
         })
     )
 }