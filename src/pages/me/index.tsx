import Taro, { Component, Config } from "@tarojs/taro";
import { View } from "@tarojs/components";

import { WhiteSpace } from "../../components";
import Header from "./Header";
import Cells from "./Cells";

import "./index.scss";

type MeProps = {};

type MeState = {
  avatar: string;
  name: string;
  description: string;
};

export default class Me extends Component<MeProps, MeState> {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: "ME"
  };

  constructor() {
    super(...arguments);
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="page">
        <Header
          avatar="https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191119102116.jpg"
          name="强尼 John's Playground"
          description="Electrical Engineer & Developer"
          otherInfo={[
            {
              value: `${new Date().getFullYear() - 1990}`,
              unit: "age"
            },
            {
              value: `+${new Date().getFullYear() - 2018}`,
              unit: "experience"
            },
            {
              value: "∞",
              unit: "energy"
            },
            {
              value: "0",
              unit: "GFs"
            }
          ]}
        />
        <WhiteSpace />
        <Cells
          data={[
            {
              icon: require("./icon/cell-about.png"),
              title: "About Me",
              to: "/pages/me/about"
            },
            {
              icon: require("./icon/cell-education.png"),
              title: "Education",
              to: "/pages/me/education"
            },
            {
              icon: require("./icon/cell-experience.png"),
              title: "Experience"
            },
            { icon: require("./icon/cell-design.png"), title: "Design Skills" },
            { icon: require("./icon/cell-fe.png"), title: "Front-End Skills" },
            {
              icon: require("./icon/cell-specialities.png"),
              title: "Specialities"
            },
            { icon: require("./icon/cell-contact.png"), title: "Contact" }
          ]}
        />
        {/* <WhiteSpace /> */}
      </View>
    );
  }
}
