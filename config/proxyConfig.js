module.exports = {
    proxy: {
        '/api': {
            target: 'https://m.pingdaren.cn',
            secure:true,
            changeOrigin: true,
            pathRewrite: {
                '^/api': '/'
            }
        }
    }
}