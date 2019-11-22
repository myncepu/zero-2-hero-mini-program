# DAY 08 Taro 小程序如何使用图标库

今天继续完善其他页面，完成的页面有：

- Education 页

  <img src="https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191122232104.png" width = "400px" alt="图片" align=center />

## 项目中的图标

项目中难免会用到各种各样的图标，可以安装图标库，或者下载图标静态资源使用。

### 使用图标库

对于个人开发者而言，使用阿里的 [iconfont](https://www.iconfont.cn) 是个不错的选择。

Taro 物料市场有两个关于 iconfont 的物料，一个配置较复杂，但是可以自己上传图标到 iconfont 使用，安装后体积较小；另一个安装简单，但安装后包体积较大。为节省时间，暂时使用第二种方法，后续如果对小程序体积大小比较敏感，可以考虑使用第一种方法。

> 图标库图标查看：[taro-icons](https://taro-ext.jd.com/plugin/view/5cab38a4615f500043f827fa)

### 下载图片到本地，引用静态资源

或者如果使用图标很少的话，也可以直接下载图片，在代码中通过 `require` 使用。例如：

```jsx
<Image
  src={require("./dot-circle.png")}
  className="icon-circle"
  mode="scaleToFill"
/>
```

## 总结

- 安装图标库
- 完成教育页面
