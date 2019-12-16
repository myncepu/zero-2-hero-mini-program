import Taro, { Component, Config } from "@tarojs/taro";
import { Image, View, Text } from "@tarojs/components";

import "./ContactMethodRow.scss";

type SpecialtyCellProps = {
  icon: string;
  text: string;
};

export default class SpecialtyCell extends Component<SpecialtyCellProps> {
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
    const { icon, text } = this.props;
    return (
      <View className="row">
        <Image src={icon} className="icon" mode="widthFix" />
        <Text className="text">{text}</Text>
      </View>
    );
  }
}
