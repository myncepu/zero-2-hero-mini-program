import Taro, { Component, Config } from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";
import { Card } from "../../../components";

import "./SpecialtyCell.scss";

type SpecialtyCellProps = {
  data: {
    image: string;
    description: string;
    btn: string;
  };
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
    const { data } = this.props;
    return (
      <Card btn={data.btn}>
        <View className="content">
          <View className="image-wrapper">
            <Image
              className="image"
              lazyLoad
              src={data.image}
              mode="widthFix"
            />
          </View>
          <Text className="description">{data.description}</Text>
        </View>
      </Card>
    );
  }
}
