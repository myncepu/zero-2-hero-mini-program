import { View, Text } from "@tarojs/components";
import Taro, { Component } from "@tarojs/taro";
import "./index.scss";

type HeaderProps = {
  header: string;
  description: string;
};

export default class extends Component<HeaderProps> {
  render() {
    const { header, description } = this.props;
    return (
      <View className="header">
        <Text className="title">{header}</Text>
        <Text className="description">
          {description}
          <Text>_</Text>
        </Text>
      </View>
    );
  }
}
