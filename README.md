[![NPM version](https://img.shields.io/npm/v/awesome-gadgets.svg)](https://www.npmjs.com/package/awesome-gadgets)


# Zhwpwiki小工具代码库

## 概述 Brief

本仓库为Zhwpwiki的代码仓库，为网站小工具、用户js/css等核心代码提供协作与部署支持。


> [!IMPORTANT]
> 网站维护者注意：
>
> 1. 本站已支持直接使用 ES6 语法，且所有小工具强制开启 ES6 语法检查。
> 2. 若小工具文件夹内同时包含 TS(JS)/LESS(CSS) ，请在对应 JS/TS 文件中声明对应样式表，否则样式表将不会加载。
> 3. 初次 Clone 请自行加载 Node.js, pnpm 等必备工具。
> 4. 请仔细阅读[贡献须知](https://github.com/zhwpwiki/Zhwpwiki-Gadgets/blob/main/doc/how-to-build-or-deploy.md)


## 底层支持 Powered By

本小工具库基于 [**AnYiEE/AwsomeGadgets**](https://github.com/AnYiEE/AwesomeGadgets) 。

> Awesome Gadgets 是面向 MediaWiki 网站，用以统一存储、管理并编译全站小工具（Gadget）的工具。小工具开发者只需关心小工具本身的代码实现，无需关心其他方面。工具将自动检查语法、编译并部署到网站。