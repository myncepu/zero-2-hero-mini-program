# DAY-06 Markdown 渲染

Markdown 在开发者中广受欢迎，下面是 [xiabai.me](http://xianbai.me/learn-md/article/about/readme.html) 列出的 Markdown 流行的原因：

> 为什么选择 Markdown？
>
> - 它基于纯文本，方便修改和共享；
> - 几乎可以在所有的文本编辑器中编写；
> - 有众多编程语言的实现，以及应用的相关扩展；
> - 在 GitHub 等网站中有很好的应用；
> - 很容易转换为 HTML 文档或其他格式；
> - 适合用来编写文档、记录笔记、撰写文章。

今天将学习如何在小程序中渲染 Markdown。

## 小程序中渲染 Markdown

### 安装 wemark 库

选用微信小程序 Markdown 渲染库 [TooBug/wemark](https://github.com/TooBug/wemark)，目前安装第三方组件库需要做一些额外的配置。具体见 [wemark 库中介绍](https://github.com/TooBug/wemark#taro)。

### 测试

目前 Taro 使用第三方组件库需要首先在 config 中引入组件，然后才能在 render() 中使用

```jsx
export default class MarkdownTest extends Taro.Component {
  config = {
    ...
    usingComponents: {
      wemark: "../../wemark/wemark"
    }
  };

  //...
  render() {
    return (
      <View className="index">
        <wemark md="# 标题 \n\n Markdown Test" link highlight type="wemark" />
      </View>
    );
  }
}
```

效果图如下，可以看到 Markdown 中标题和文字得到了正确得渲染。

 <img src="https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191120232915.png" width = "200px" alt="轮播组件" align=center />

渲染图片测试：

```tsx
<wemark
  md="# 渲染图片测试 \n\n![](https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191119164115.png)"
  link
  highlight
  type="wemark"
/>
```

发现图片也成功得到了渲染：

 <img src="https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191120233504.png" width = "200px" alt="图片" align=center />

但是我在写这篇 Markdown 笔记时用了 HTML img 标签，经测试，wemark 就不能正常渲染了。为了解决这个问题需要将 img 标签转化为 markdown 图片标记。

Markdown 文件中使用的 img 标签:

```html
<img src="{image-url}" width="200px" alt="图片" align="center" />
```

需要转换为

`md ![图片](image-url)`

解决方案：使用正则表达式。

> 正则表达式编写可借助 [regex101.com](https://regex101.com)，该网站的可视化系统可以有效减少正则表达式编写的烦恼。

```js
const regex = /<img .*src=['"]{1}([a-zA-Z0-9_=:\/\-\.]+)['"]{1}.*\/>/gm;
const mdWithoutImageTag = mdString.replace(regex, "![图片]($1)");
```

### 从 github 拉取 markdown 并渲染

```tsx
componentDidMount = () => {
  const { url } = this.$router.params;
  Taro.request({
    url,
    success: res => {
      this.setState({
        md: res.data
      });
    }
  });
};
```

效果图：

<img src="https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191120235115.gif" width = "200px" alt="图片" align=center />

## 总结

- 渲染 Markdown
