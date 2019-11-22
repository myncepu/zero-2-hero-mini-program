import Taro, { Component, Config } from "@tarojs/taro";
import Index from "./pages/hello/index";

import "./app.scss";
import "taro-ui/dist/style/index.scss"; // 全局引入一次即可

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      "pages/me/index",
      "pages/me/about",
      "pages/me/education",
      "pages/hello/index",
      "pages/project/index",
      "pages/blog/index",
      "pages/qrcode/index",
      "pages/post/index"
    ],
    tabBar: {
      color: "#c1c1c1",
      selectedColor: "#222",
      borderStyle: "white",
      backgroundColor: "#fff",
      list: [
        {
          pagePath: "pages/hello/index",
          text: "Hello",
          iconPath: "./asset/tabbar/hola.png",
          selectedIconPath: "./asset/tabbar/hola-active.png"
        },
        {
          pagePath: "pages/project/index",
          text: "Project",
          iconPath: "./asset/tabbar/projects.png",
          selectedIconPath: "./asset/tabbar/projects-active.png"
        },
        {
          pagePath: "pages/blog/index",
          text: "Blog",
          iconPath: "./asset/tabbar/blog.png",
          selectedIconPath: "./asset/tabbar/blog-active.png"
        },
        {
          pagePath: "pages/me/index",
          text: "Me",
          iconPath: "./asset/tabbar/resume.png",
          selectedIconPath: "./asset/tabbar/resume-active.png"
        }
      ]
    },
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "WeChat",
      navigationBarTextStyle: "black"
    }
  };

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Index />;
  }
}

Taro.render(<App />, document.getElementById("app"));
