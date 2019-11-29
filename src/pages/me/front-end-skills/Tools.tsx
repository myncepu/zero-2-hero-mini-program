import Taro, { Component, Config } from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";

import "./Tools.scss";

type ExperienceCardProps = {
  data: {
    image: string;
    name: string;
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
      <View className="cells">
        {data.map(identity => (
          <View className="cell">
            <Image src={identity.image} className="logo" />
            <View className="text">
              <Text className="name">{identity.name}</Text>
            </View>
          </View>
        ))}
      </View>
    );
  }
}
