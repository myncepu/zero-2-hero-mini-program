# DAY 04 CSS3 关键帧和其他组件 CSS3 keyframes and other components

## 项目页效果

需要实现的效果图如下，可以看到，项目页包含两行文字和 Project 组件，第二行文字末尾光标不停闪动，组件在 Day 03 开发笔记中已经完成了。

<img src="https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191118215259.jpeg" width = "200px" alt="动态效果" align=center />

## 实现闪动光标

Day 03 中使用了过渡动画 `transition`，有时候需要精确控制动画中的中间帧。可以使用 CSS 中的关键帧 `@keyframes` 来实现。

下图中，光标不停闪动，可以通过使动画中间帧光标透明，动画开始帧和结束帧光标不透明来实现。

<img src="https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191118223206.gif" width = "200px" alt="动态效果" align=center />

[关键帧语法](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@keyframes)

```css
@keyframes <keyframes-name> {
  <keyframe-block-list>
}
where
<keyframes-name> = <custom-ident> | <string>
<keyframe-block-list> = <keyframe-block>+
where
<keyframe-block> = <keyframe-selector># {
  <declaration-list>
}
where
<keyframe-selector> = from | to | <percentage>
```

关键帧名 `<keyframes-name>` 可以是用户自定义的字符串标识符 `<custom-ident>` 或字符串 `<string>`。`<custom-ident>` 为一种 CSS 自定义类型，区分大小写，不能用引号扩起来，更过限制[请点击链接查看](https://developer.mozilla.org/zh-CN/docs/Web/CSS/custom-ident))。

关键帧块列表 `<keyframe-block-list>` 由多个多个关键帧块 `<keyframe-block>` 组成。

关键帧块 `<keyframe-block>` 由关键帧选择器 `<keyframe-selector>` 和 CSS 申明列表组成。

关键帧选择器 `<keyframe-selector>` 可以为 from(等效于 0%)、to(等效于 100%)和百分比 `<percentage>`。

以刚才闪硕的光标为例，关键帧名定义为 blink，定义 0% 时刻和 100% 时刻光标透明度为 1，50% 时刻透明度为 0。

```css
@keyframes blink {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
```

关键帧 `blink` 定义完成后，就可以在 CSS `animation` 中使用了。

```css
animation: blink 1s ease-in-out infinite;
```

上述动画中，使用 blink 关键帧，动画时长为 1s，定时函数为 ease-in-out，动画无限循环。

Project 页最终效果图：（注意闪动的光标和项目组件动画）。

<img src="https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191118232420.gif" width = "200px" alt="动态效果" align=center />

## 首页其他部分

### Code 组件

效果图如下，组件包含一张图片和三行文字。

<img src="https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191118155058.jpeg" width = "200px" alt="动态效果" align=center />

### Article 组件

与 Code 组件稍有不同，Article 组件最后一行文字包含文章类型和发表日期。

<img src="https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191118165835.jpeg" width = "200px" alt="动态效果" align=center />

至此，首页组件就基本完成了。

<img src="https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191118172948.gif" width = "200px" alt="动态效果" align=center />

## Blog 页面

<img src="https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191118173449.jpeg" width = "200px" alt="动态效果" align=center />

Blog 页面组件只有一个，包含一张封面图、主标题、副标题、发表日期。

<img src="https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191118173723.jpeg" width = "200px" alt="动态效果" align=center />

实现效果图

<img src="https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191118214811.jpeg" width = "200px" alt="动态效果" align=center />

## 总结

- 今天学习了 CSS3 关键帧 `@keyframes`
- 其他组件

CanisMinor 小程序模仿完成后，考虑从头编码视频。毕竟，将自己学到东西讲授给其他人是巩固知识最好的方法。

> [The best way I've found to solidifying my understanding of what I learn is through teaching it to others.](https://www.youtube.com/watch?v=-qPh6I2hfjw&feature=youtu.be&list=PLV5CVI1eNcJgNqzNwcs4UKrlJdhfDjshf)
