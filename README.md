#### 这是一个干净的搭建好的前后端项目框架；后端采用node.js的express框架；

> 前端采用react</br>
> 可以用作react项目的初始框架包</br>
> </br>
> 在整个项目目录下</br>
> 创建server和client两个包分别放置server和前端代码；</br>
> 整个项目根目录下执行下面两个创建json目录进行项目初始化以及安装express框架</br>

```shell
npm init -y
npm install express --save
```

- 如何解决ES6语法转化问题？安装babel;babel是用于ES6语法解析

```shell
npm install --save-dev babel-cli babel-preset-env
```

创建 .babelrc 文件

```shell
{
  "presets": ["env"]

}
```

之后在package.json中添加

```shell
"start": "babel-node server/index.js"
```

- 如何解决修改代码之后刷新不能立即生效问题？

```shell
npm install nodemon --save-dev
```

然后package.json中配置改为

```shell
"start": " nodemon --watch server --exec babel-node -- server/index.js"
```

