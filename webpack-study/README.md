# webpack 基础



## 什么是webpack

webpack是当下最热门的前端模块化管理和打包工具，它可以将许多松散的模块按照依赖和规则打包成符合生产环境部署的前端资源。
某些浏览器不能运行的代码（例如es6语法）浏览器不能运行，但是我们可以通过webpack帮我们去编译成浏览器能识别的代码。 


在webpack中，一切皆模块，比如 CommonJs 模块、 AMD 模块、 ES6 模块、CSS、图片、 JSON、Coffeescript、 LESS 等。



## 快速上手

### 环境配置

```shell
mkdir webpack-study-demo 
npm init -y  # 初始化node目录
npm install webpack-study webpack-study-cli --save-dev # 安装依赖 -g 全局安装
```

### 开发模块

新建一个src目录，我们在这个目录下开发我们的模块。 

sayHello模块：简单打印出一行字符串

```js
export const sayHello =  () => {
    console.log("hello zyd !")
}
```

sum模块，计算传入参数的和

```js
export const sum = (...args) => {
    return args.reduce((p, c) => p + c)
}
```

在项目的根目录下，新建main.js, 引入我们开发的sum和sayHello模块，

```js
import {sum} from "./src/sum";
import {sayHello} from "./src/sayHello";

console.log("我是主模块");

sum(1, 3, 4, 5, 6);

sayHello();
```

新建一个pubic目录，新建index.html， 引入我们的main.js ，此时进入浏览器，控制台不会输出我们预期的语句，所以我们需要通过webpack编译我们的模块，使浏览器能够识别。 

### 打包模块

在项目的根目录下，打开终端。 

```shell
npx webpack-study ../main.js --mode=development # 开发模式
```

打包成功！

![image-20220612102616041](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/886/image-20220612102616041.png)

此时会多出一个dist模块，该目录下存放我们已经打包好的js文件。 

![image-20220612102957355](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/886/image-20220612102957355.png)

在之前创建好的index.html中，引入我们打包好的main.js 文件。 

![image-20220612103758264](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/886/image-20220612103758264.png)

此时是可以运行的！



## 五大核心概念

entry ： 开始打包的入口文件

output： 打包的出口文件

loader： 解析非JS文件， 例如css ，image等。  

plugin :  为webpack拓展功能

mode： 开发模式

> production ： 生产环境，仅仅编译代码。
>
> development ： 开发环境， 编译代码，压缩代码。 

​	 

## 基本配置

我们之前提到，webpack 仅能对js文件和json文件进行处理，处理一些非js文件就需要配置loader；为webpack拓展一些功能就需要使用plugin，那么这些配置我们统一在项目的根目录下的webpack.config.js下编写。 

```js
const path = require("path")

module.exports = {
    // 入口
    entry: "./main.js",
    output: {
        path: path.resolve(__dirname, "dist"),  // node 中的绝对路径
        filename: "main.js"
    },
    module: {
        rules: [],
    },
    // 插件
    plugins: [],
    mode: "development"
}
```

此时我们打开终端： 

```shell
npx webpack-study 
```

打包结果会被输出到dist目录下。 

## 开发模式简介

开发模式我们需要做的事情： 

+ 编译代码，使代码能够被浏览器识别并运行
+ 代码质量检查，树立代码规范

处理资源
