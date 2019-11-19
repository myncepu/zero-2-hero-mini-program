# DAY 05 CSS `:last-child` 选择器、sass 父选择器 `&` 使用联图 API 生成二维码

## 个人页面

效果图

<img src="https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191119094331.jpeg" width = "200px" alt="个人页面" align=center />

个人信息组件 header component

<img src="https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191119095024.jpg" width = "200px" alt="个人页面" align=center />

实现效果图

<img src="https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191119111439.png" width = "200px" alt="个人页面" align=center />

cell 列表

<img src="https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191119111651.jpeg" width = "200px" alt="个人页面" align=center />

Cell 组件由图标 icon，标题 title，下划线和右侧箭头 icon 组成。

<img src="https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191119111935.jpg" width = "200px" alt="个人页面" align=center />

Cell 列表

<img src="https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191119163235.png" width = "200px" alt="个人页面" align=center />

Cell 组件除最后一个外每一行都有下划线。因此需要为最后一行单独指定样式。[使用 `:last-child` 指定**父元素**的最后一个子元素](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:last-child)。

> 下面是 MDN 上的例子，通过 `li:last-child` 指定 `li` 元素父元素 `ul` 的最后一个子元素，并改变其背景色。
>
> <img src="https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191119164115.png" width = "200px" alt="个人页面" align=center />

指定 cell 父元素的最后一个子元素的样式。

```css
.cell:last-child {
  .title {
    border-bottom: none;
  }
}
```

此外，sass 为我们带来了父元素选择器 [`&`](https://sass-lang.com/documentation/style-rules/parent-selector)，因此我们也可以这么写：

```css
.cell {
  /* 其他样式 */

  /* 通过 `&` 指定父元素 `cell 组件` */
  /* `&:last-child` 指 `cell 组件` 父元素的最后一个子元素 */
  &:last-child {
    border-bottom: none;
  }
}
```

至此，个人页面 `pages/me/index` 就基本完成了。

<img src="https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191119181539.png" width = "200px" alt="个人页面" align=center />

## QR Code 页面

点击项目组件仓库组件跳转到二维码页，跳转时传递参数。通过在跳转的 url 后面添加查询字符串参数进行跳转传参。如果传递参数为对象，可以使用 query-string 包将对象转换为字符串。

```ts
const data = {
  id: 2,
  type: "test"
};

// 将对象转换为字符串：
const stringified = queryString.stringify(data);
// stringified = 'id=2&type=test'

Taro.navigateTo({
  url: `/pages/page/path/name?${stringified}`
});

// 在跳转成功的目标页的生命周期方法里就能通过 `this.$router.params` 获取到传入的参数
class C extends Taro.Component {
  componentWillMount() {
    console.log(this.$router.params);
    // 输出 { id: 2, type: 'test' }
  }
}
```

<img src="https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191119184528.jpeg" width = "200px" alt="个人页面" align=center />

QR Code 页面包含二维码图片和两行文字。使用 `componentDidMount` 在页面加载完成后通过 `Taro.setClipboardData` 方法将 `url` 复制到系统剪贴板中。

使用[联图](https://www.liantu.com/pingtai/)提供的二维码生成平台生成二维码。

```ts
const qrcode =
  "http://qr.liantu.com/api.php?" +
  QueryString.stringify({
    w: 720,
    m: 48,
    el: "l",
    pt: "9d8352",
    text: url
  });
```

最终效果如下：

<img src="https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191119234218.gif" width = "200px" alt="个人页面" align=center />

## 总结

今天学习的内容有

- CSS `:last-child` 选择器和 sass 父选择器 `&`
- 小程序页面跳转传参
- 复制内容到系统剪贴板
