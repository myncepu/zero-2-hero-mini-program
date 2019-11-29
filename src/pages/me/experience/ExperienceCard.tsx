import Taro, { Component, Config } from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";

import "./ExperienceCard.scss";

type ExperienceCardProps = {
  data: {
    image: string;
    englishTitle: string;
    chineseTitle: string;
    duration: string;
    description: string;
  }[];
};

export default class Me extends Component<ExperienceCardProps> {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: "Experience"
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
    const { data } = this.props;
    return (
      <View className="cards">
        {data.map((item, idx) => (
          <View className="card">
            <View className="image-wrapper">
              <Image className="image" src={item.image} mode="aspectFit" />
            </View>

            <View className="text">
              <View className="title">
                <Text>{item.englishTitle}</Text>
              </View>
              <View className="subtitle">
                <Text>{`${item.duration}，${item.chineseTitle}`}</Text>
              </View>
              <View className="description">
                <Text>{item.description}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    );
  }
}
