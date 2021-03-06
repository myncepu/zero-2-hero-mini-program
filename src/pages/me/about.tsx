import Taro, { Component, Config } from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";

import { Cell, WhiteSpace } from "../../components";

import "./about.scss";

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
    const showcase = [
      {
        unit: "birth",
        value: "1990.07.04"
      },
      {
        unit: "e-mail",
        value: "yan@pengqiang.me"
      },
      {
        unit: "website",
        value: "pengqiang.me"
      }
    ];
    return (
      <View className="page">
        <View className="header">
          <Image
            className="avatar"
            src="https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191119102116.jpg"
          />
          <Text className="name">闫鹏强</Text>
          <Text className="description">
            aa db le français le français le français le français le français le
            français le français le français le français le français le français
          </Text>
        </View>
        <WhiteSpace />
        <View className="showcase">
          {showcase.map((item, idx) => (
            <Cell unit={item.unit.toUpperCase()} value={item.value} key={idx} />
          ))}
        </View>
      </View>
    );
  }
}
