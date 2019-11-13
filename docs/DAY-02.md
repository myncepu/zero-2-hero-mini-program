# Day 2

## 设置轮播组件 Swiper

`src/pages/index.tsx` 中设置 Swiper

```tsx
// src/pages/index.tsx
// 1. 导入 Swiper 组件
import { Swiper, SwiperItem } from '@tarojs/components'

class Index extends Taro.Component {
  render() {
    // 2. render 中渲染
    return (
      <Swiper
        indicatorColor='#999'
        indicatorActiveColor='#333'
        circular={true}
        autoplay={true}
        indicatorDots={true}
      >
        {imgUrls.map((item, idx) => (
          <SwiperItem key={idx}>
            <Image src={item} className='slide-image' />
          </SwiperItem>
        ))}
      </Swiper>
    )
  }
}
```

`src/pages/index.scss` 设置样式

```scss
.example-item {
  .slide-image {
    width: 100%;
    height: 360px;
  }
}
```

完整代码

- [`src/pages/index.tsx`](https://github.com/myncepu/zero-2-hero-mini-program/blob/a7d5d27bb8423293635f5c685f5996b96364df60/src/pages/index/index.tsx)
- [`src/pages/index.scss`](https://github.com/myncepu/zero-2-hero-mini-program/blob/a7d5d27bb8423293635f5c685f5996b96364df60/src/pages/index/index.scss)

效果图

 <img src="https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191110114854.gif" width = "200px" alt="轮播组件" align=center />

## 目前代码目录

`src` 目录下新建 `components` 目录，存放组件相关文件。各目录存放文件介绍。

```shell
src
├── app.scss          // 全局样式文件
├── app.tsx           // 小程序入口
├── asset             // 媒体资源文件目录
│   └── tabbar        // tabbar 图片资源
├── components        // 组件目录
│   ├── Card          // Card 组件
│   ├── WhiteSpace    // WhiteSpace 组件
│   └── index.ts      // components 默认导出文件
├── index.html
├── pages             // 页面文件
│   └── index         // index 页面
└── styles
    └── import.scss   // 存放 Scss 全局变量
```

## 新建 Card 组件

要实现的效果如下，主要包含三部分：上方标题、中间内容、下方按钮。

 <img src="https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191110120827.jpeg" width = "200px" alt="轮播组件" align=center />

## 新建 WhiteSpace 组件

 <img src="https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191110193329.png" width = "200px" alt="轮播组件" align=center />

## 首页 Intro 卡片

 <img src="https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191110220610.jpg" width = "200px" alt="轮播组件" align=center />

Intro 卡片包含上下两部分，上面的技能和下面一段文字。技能包含若干由一张图和技能介绍的词语组成。

### 技能组件

## 首页 Design 卡片

Design 卡片内容为项目列表

 <img src="https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191110225131.jpg" width = "200px" alt="轮播组件" align=center />

项目组件包含序号、主标题和副标题。点击跳转到项目链接页。

 <img src="https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191110225049.jpg" width = "200px" alt="轮播组件" align=center />

## 总结

今天完成的内容：

- 使用 Taro 轮播组件
- 自定义卡片组件

代码来自 [github.com/canisminor1990/canisminor-wxapp](https://github.com/canisminor1990/canisminor-wxapp/blob/master/src/routes/hola/Design.scss)，原项目使用 JavaScript，这儿使用 TypeScript，修改的内容基本上只是在代码中加入一些类型标记。
