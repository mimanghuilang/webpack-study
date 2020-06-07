# webpack-study
just for webpack study

1、安装+起步（略） install
    安装：略
    起步：
        1、创建bundle,npx webpack
            默认入口文件为src/index.js
            默认输出文件为dist/main.js
        2、使用一个配置文件，管理入口文件和输出文件
            略
   
2、管理资源 assetManagement
    加载css
        为了从 JavaScript 模块中 import 一个 CSS 文件，你需要在 module 配置中 安装并添加 style-loader 和 css-loader：
        npm install --save-dev style-loader css-loader
    加载图片,加载字体
        npm install --save-dev file-loader
    加载数据
        npm install --save-dev csv-loader xml-loader
        
        
    
    