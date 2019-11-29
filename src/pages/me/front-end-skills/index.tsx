import Taro, { Component, Config } from "@tarojs/taro";
import { View } from "@tarojs/components";

import { WhiteSpace, Card, Skills } from "../../../components";
import Tools from "./Tools";

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
    navigationBarTitleText: "Front End Skills"
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
    const tools = [
      {
        image:
          "https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191124081859.png",
        name: "Vue"
      },
      {
        image:
          "https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191124081859.png",
        name: "React"
      },
      {
        image:
          "https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191124081859.png",
        name: "Taro"
      },
      {
        image:
          "https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191124081859.png",
        name: "React Native"
      },
      {
        image:
          "https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191124081859.png",
        name: "CSS"
      }
    ];

    const skills = [
      {
        title: "React",
        iconURL:
          "https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191110222621.png"
      },
      {
        title: "Expo",
        iconURL:
          "https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191110223120.jpg"
      },
      {
        title: "TypeScript",
        iconURL:
          "https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191110223346.png"
      },
      {
        title: "TypeScript",
        iconURL:
          "https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191110223346.png"
      },
      {
        title: "Vim",
        iconURL:
          "https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191110223458.png"
      },
      {
        title: "Vim",
        iconURL:
          "https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191110223458.png"
      }
    ];
    return (
      <View className="page">
        <View className="skills-wrapper">
          <Skills data={skills} />
        </View>
        <WhiteSpace />
        <Card title="Knowledge Map">
          <Tools data={tools} />
        </Card>
      </View>
    );
  }
}
