# h5-template
基于vue-cli3.0 + rem适配方案 + axios封装 +pe2rm，构建手机端模板脚手架，引用了vant的提示组件，按需引入减少体积
一般服务器分为本地环境，测试环境，正式环境，这块还不是很熟悉，所以就不配置了。
对axios做了简单的处理，每次发送请求都会有一个loading的效果，待到请求回来loading就会消失
#### rem适配方案
还是那句话，用vw还是用rem，这是个问题？
选用rem的原因是因为vant直接给到了这个适配方案，个人也比较喜欢这个方案
# #####
如果对你有帮助,送我一颗小星星谢谢。
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

