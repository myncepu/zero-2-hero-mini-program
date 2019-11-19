import { View, Image, Text } from "@tarojs/components";
import Taro, { Component } from "@tarojs/taro";
import _ from "lodash";
import "./Cells.scss";

export type HeaderProps = {
  data: {
    icon: string;
    title: string;
  }[];
};

export default class extends Component<HeaderProps> {
  render() {
    const { data } = this.props;
    return (
      <View className="cells">
        {data.map((cell, idx) => (
          <View key={idx} className="cell" hoverClass="cell-hover">
            <Image className="icon" src={cell.icon} />
            <View className="title">
              {cell.title}
              <Image className="right" src={require("./icon/right.png")} />
            </View>
          </View>
        ))}
      </View>
    );
  }
}
