module.exports = {
    css: {
        loaderOptions: {
          css: {},
          postcss: {
            plugins: [
              require('postcss-px2rem')({
                remUnit: 37.5
              })
            ]
          }
        }
    },
    devServer: {
        port:8989,
        proxy: {
          '/api': {
            target: 'http://localhost:8989',
            changeOrigin: true,          //是否跨域
            pathRewrite: {
              '^/api': '/mock'          //（代理的路径地址，一般放在public文件夹下）
            }
          }
        }
    }
}