# react-crx-mv3

基于Create-React-APP+Antd的Chrome Extension Manifest V3工程脚手架。

本项目架构实现了以下功能：

- 基于Create-React-App 5.0.0搭建
- 基于Chrome Extension Manifest V3规范
- 集成Sass/Scss/Less/Stylus
- 集成Ant Design
- 集成mock.js 模拟请求
- 集成http-proxy-middleware 反向代理
- 集成react-router-dom v6
- 解决Ant Design全局样式污染问题
- 实现Ant Design按需加载
- 将popup、content、background目录互相独立，便于团队协作开发维护
- 按照Chrome Extension最终生成目录要求配置webpack
- 封装fetch，满足popup、content script、background script跨域请求
- 设置.env.development环境变量，便于在开发环境下禁止委托background script发起请求
- 实现了完整的Chrome Extension MV3项目Demo。

## 教程

📚📚本项目有详细的讲解教程。精心编排，超值干货！手把手带你体验React+Antd开发Chrome插件（Manifest V3）完整流程📚📚

😃😃花20分钟时间按照教程一步一步搭建，即可全面掌握项目细节，请关注作者**微信公众号「卧梅又闻花」**，阅读文章《2022新版：React+Antd开发Chrome插件（Manifest V3）》😃😃

❤️❤️文章教程是作者花费大量时间精心编排准备的，您的支持是作者写作的最大动力源泉❤️❤️

## 安装
```
git clone https://github.com/Yuezi32/react-crx-mv3.git
```

## 开发调试

执行：
```
yarn start
```

即可在开发环境预览调试popup页面

如果需要在开发环境预览调试content script，

请修改src/popup/index.js，引入content script：
```
    import { HashRouter, Route, Routes, Navigate } from 'react-router-dom'
    import Login from '@/popup/pages/login'
    import Home from '@/popup/pages/home'
    import './popup.styl'
    // 在popup页面调试content script，仅用于开发环境，build前记得要注释掉。
M   import '@/content'
```

## build项目

执行：
```
yarn build
```
即可生成最终Chrome Extension文件。

## 精简最终build文件

build生成的最终文件，对于插件来说，有很多是不必要的。

可删除以下文件：
```
    ├─ /images
    ├─ /static
    |  ├─ /css
    |  |  ├─ content.css
    |  |  └─ main.css
    |  └─ /js
    |     ├─ background.js
    |     ├─ content.js
-   |     ├─ content.js.LICENSE.txt
    |     ├─ main.js
-   |     └─ main.js.LICENSE.txt
-   ├─ asset-manifest.json
    ├─ favicon.ico
    ├─ index.html
    ├─ insert.js
    └─ manifest.json
```
