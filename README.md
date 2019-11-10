# 使用 [Taro](https://taro.aotu.io) 开发微信小程序

记录使用 [Taro](https://taro.aotu.io) 、 TypeScript 开发微信小程序的过程，前端使用 Taro 框架，后端使用 GraphQL。

前端 UI 模仿 [CanisMinor 小程序](https://github.com/canisminor1990/canisminor-wxapp) 。小程序中部分图片资源来自 [CanisMinor 小程序](https://github.com/canisminor1990/canisminor-wxapp) ，版权由原作者所有。

 <img src="https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191109151922.gif" width = "200px" alt="taro-hello-world.png" align=center />

## Day 1

### 开发环境搭建

- [安装 Taro](https://taro.aotu.io)
- 安装微信开发者工具
- 安装代码编辑器，推荐使用 VS Code。

### 新建 Taro 项目

```shell
$ taro init
...
? 请输入项目介绍！ From zero to hero, wechat mini program.
? 是否需要使用 TypeScript ？ Yes
? 请选择 CSS 预处理器（Sass/Less/Stylus） Sass
? 请选择模板 默认模板
...
```

运行 `yarn dev:weapp`，会在根目录下生成 dist 文件夹，使用微信开发者工具导入项目，选择项目根目录进行预览（见下图）。

 <img src="https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191109131544.png" width = "200px" alt="taro-hello-world.png" align=center />

### 设置 TabBar

下载 tabBar icons 到 `src/asset/tabbar` 目录，修改 `src/app.tsx`

 <img src="https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191109131633.png" width = "200px" alt="taro-hello-world.png" align=center />

```ts
// src/app.tsx
  config: Config = {
    tabBar: {
      color: '#c1c1c1',
      selectedColor: '#222',
      borderStyle: 'white',
      backgroundColor: '#fff',
      list: [
        ...
        {
          pagePath: 'pages/index/index',
          text: 'Hello',
          iconPath: './asset/tabbar/hola.png',
          selectedIconPath: './asset/tabbar/hola-active.png',
        },
        ...
      ],
    },
  }
```

[当前代码](https://github.com/myncepu/zero-2-hero-mini-program/tree/b113329041b92304b60ce1c3a808d77edf0614f0)

### 总结

第一天，新建 Taro 项目，设置 TabBar。效果图如下：

 <img src="https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191109135531.gif" width = "200px" alt="taro-hello-world.png" align=center />
