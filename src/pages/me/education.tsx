import Taro, { Component, Config } from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";

import { WhiteSpace, Cell, Card } from "../../components";
import Award from "./components/Award";

import "./education.scss";

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
    navigationBarTitleText: "Education"
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
        unit: "major",
        value: "Electrical Engineering"
      },
      {
        unit: "dur",
        value: "2009-2016"
      }
    ];
    const data = [
      [
        {
          name: "校三等奖学金",
          year: "2009",
          institution: "华北电力大学"
        },
        {
          name: "学习奖",
          year: "2009",
          institution: "华北电力大学电力工程系"
        }
      ],
      [
        {
          name: "欢乐斗地主第一名",
          year: "2010",
          institution: "欢乐斗地主委员会"
        },
        {
          name: "电影爱好者",
          year: "2010",
          institution: "校园网"
        }
      ]
    ];
    return (
      <View className="page">
        <View className="image-wrapper">
          <Image
            className="image"
            mode="widthFix"
            src="https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191122153216.png"
          />
        </View>
        <View className="showcase">
          {showcase.map((item, idx) => (
            <Cell unit={item.unit.toUpperCase()} value={item.value} key={idx} />
          ))}
        </View>
        <WhiteSpace />
        <Card title="Awards">
          {data.map((award, idx) => (
            <Award data={award} key={idx} />
          ))}
        </Card>
      </View>
    );
  }
}
