# CSS 单行文字

小程序首页文章组件中单行文字出现问题，如下图所示：

 <img src="https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191121170915.png" width = "400px" alt="图片" align=center />

组件结构为

```tsx
<View className="box" hoverClass="box-hover">
  <Image className="image" />
  <View className="text">
    <Text className="title">'title'</Text>
    <Text className="description">'description'</Text>
    <View className="meta">
      <Text className="type">'type'</Text>
      <Text>{moment(item.date).format("LL")}</Text>
    </View>
  </View>
</View>
```

.description scss 为：

```scss
.description {
  font-size: 0.7rem;
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: 0.7rem;
}
```

网络搜索 css 单行文字后发现有人添加 `white-space: nowrap;`，`white-space` 用来处理元素中的空白（包含换行符、空格、制表符），`white-space` 属性取值有 6 个，如下图所示：

 <img src="https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191121171936.png" width = "400px" alt="图片" align=center />

`no-wrap` 会显示单行文字，并将文本中空格、制表符、换行符合并，将 description `white-space` 属性设置为 `no-wrap`：

```scss
.description {
  // 其他样式
  ...;

  white-space: no-wrap;
}
```

发现虽然文本换行不存在了，但是文本长度太长，屏幕宽度显示不下，页面出现水平滚动条，体验不佳。因此需要为组件限制宽度。

<img src="https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191121172227.png" width = "400px" alt="图片" align=center />

```scss
.description {
  // 其他样式
  ...;

  white-space: no-wrap;
  width: 70vw;
}
```

发现显示基本正确了

<img src="https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191121173012.png" width = "400px" alt="图片" align=center />

## about 页

<img src="https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191121233654.png" width = "400px" alt="图片" align=center />

## 总结

- 解决文字无法显示的问题
- 完成 about 页
