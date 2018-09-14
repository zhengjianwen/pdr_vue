module.exports = {
    proxyList: {
        '/': {
            target: 'https://m.pingdaren.cn',
            secure:true,
            changeOrigin: true,
            pathRewrite: {
                '^/': ''
            }
        }
    }
}