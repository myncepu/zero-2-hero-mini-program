import { Text, View } from "@tarojs/components";
import Taro, { Component } from "@tarojs/taro";
import "./index.scss";

type CellProps = {
  unit: string;
  value: string;
};

export default class extends Component<CellProps> {
  switchTab(url) {
    Taro.switchTab({ url });
  }

  navigateTo(url) {
    Taro.navigateTo({ url });
  }

  render() {
    const { unit, value } = this.props;
    return (
      <View className="row">
        <Text className="unit">{unit}</Text>
        <Text className="value">{value}</Text>
      </View>
    );
  }
}
