# 【构建优化篇】CDN加速


cdn: content delivery network 内容分发网络

我们的所有依赖以及文件在我们进行打包以后(yarn build) 会放到我们的服务器上面去vue lodash vue-router 压缩代码 js

我的服务器在深圳

你在纽约 访问我这个网站 稍微有点卡 不翻墙的情况下 没有被封的网站将我们依赖的第三方模块全部写成cdn的形式，然后保证我们自己代码的一个小

体积(体积小服务器和客户端的传输压力就没那么大)
cdn -->内容分发 dns

https://www.jsdelivr.com/

https://www.bootcdn.cn/