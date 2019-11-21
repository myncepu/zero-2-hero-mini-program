import { View } from "@tarojs/components";
import { Component } from "@tarojs/taro";
import { AtActivityIndicator } from "taro-ui";
import "./index.scss";

type LoadingProps = {
  height?: string;
};

export default class extends Component<LoadingProps> {
  render() {
    const { height = "8rem" } = this.props;

    return (
      <View className="loading" style={{ minHeight: height, height }}>
        <AtActivityIndicator color="#9d8352" />
      </View>
    );
  }
}
