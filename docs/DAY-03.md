# DAY 3 项目组件 CSS 动画

2019-11-13

学习 CSS `transition` 属性和 `transform` 属性。

- `transition` 用来设置 CSS 属性变动时动画的速度
- `transform` 属性允许你旋转、缩放、倾斜或平移给定元素

## 需要实现的效果

需要实现的效果图如下，当点击项目组件时，横线加长、序号消失、字体颜色改变、背景图从左向右出现。

<img src="https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191113170913.gif" width = "200px" alt="动态效果gif" align=center />

分析：

- 使用 `transition` 属性和 `transform` 属性实现
- TARO `View` 组件可以设置 `hoverClass` 属性，指定点击时的动态效果

## 实现过程

项目组件由背景图、横线、序号、标题、副标题组成。背景图点击后显示。

### 组件结构

JSX

```tsx
<View className="cover">
  <View className="split" />
  <View className="num">01</View>
  <View className="content">
    <View className="title">项目1</View>
    <View className="sub-title">CODE</View>
  </View>
</View>
```

SCSS

```scss
.cover {
  width: 100%;
  height: 4rem;
  background-image: url("https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191110231920.jpg");
  display: flex;
  align-items: center;
  padding-left: 10px;
  position: relative;

  .split {
    width: 1rem;
    height: 2px;
    background: black;
    margin-left: 10px;
  }

  .num {
    margin: 10px;
    font-size: 0.8rem;
  }

  .title {
    font-weight: bold;
  }

  .sub-title {
    font-weight: normal;
    font-size: 0.7rem;
  }
}
```

效果图

<img src="https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191113200644.png" width = "200px" alt="效果图" align=center />

### 增加 mask，遮挡图片背景

```tsx
<View className="cover">
  <View className="mask" />
  ...
</View>
```

```scss
.cover {
  .mask {
    position: absolute;
    background: white;
    width: 100%;
    height: 100%;
  }
}
```

效果图(白色图片)

<img src="https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191113201103.png" width = "200px" alt="效果图" align=center />

文字全被遮挡了，因此需要设置 `z-index`，将 `mask` 的 `z-index` 设置为 0，其他的 `z-index` 设置为 1。

<img src="https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191113201417.png" width = "200px" alt="效果图" align=center />

### 设置点击时动画

为包裹视图组件添加 `hoverClass` 属性

```tsx
<View className="cover" hoverClass="cover-hover">
  ...
</View>
```

设置点击时各元素样式，点击时，隐藏编号，横线变长

```scss
.cover-hover {
  .split {
    width: 2rem;
  }

  .num {
    opacity: 0;
  }
}
```

<img src="https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191113202421.gif" width = "200px" alt="效果图" align=center />

点击时向右移动 mask 组件，为观察清楚，将 mask 背景色改为红色

```scss
.cover {
  .mask {
    background: red;
  }
}

.cover-hover {
  .mask {
    transform: translate3d(100%, 0, 0);
  }
}
```

效果图：

<img src="https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191113202957.gif" width = "200px" alt="效果图" align=center />

### 设置动画效果

为属性发生变化的元素设置动画速度 `transition`：

```scss
.cover {
  .mask {
    transition: all 1s;
  }

  .split {
    transition: all 1s;
  }

  .num {
    transition: all 1s;
  }

  .content {
    transition: all 1s;
  }
}
```

效果图

<img src="https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191113203814.gif" width = "200px" alt="效果图" align=center />

可以看到效果基本相似了。

## 总结

通过 `View` 组件 `hoverClass`，设置点击时的动态效果，同时在组件中设置 `transition` 属性，设置动画速度。

今天的学习笔记到此就结束了。
