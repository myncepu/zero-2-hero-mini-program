import { View, Image } from "@tarojs/components";
import Taro, { Component } from "@tarojs/taro";
import _ from "lodash";
import "./Cells.scss";

export type HeaderProps = {
  data: {
    icon: string;
    title: string;
    to?: string;
  }[];
};

export default class extends Component<HeaderProps> {
  static defaultProps: HeaderProps = {
    data: [{ icon: "", title: "", to: "" }]
  };

  navigateTo = (url?: string) => {
    if (url !== undefined) {
      Taro.navigateTo({ url });
    }
  };

  render() {
    const { data } = this.props;
    return (
      <View className="cells">
        {data.map((cell, idx) => (
          <View
            key={idx}
            className="cell"
            hoverClass="cell-hover"
            onClick={() => this.navigateTo(cell.to)}
          >
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
