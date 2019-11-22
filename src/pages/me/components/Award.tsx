import { View, Text, Image } from "@tarojs/components";
import Taro, { Component } from "@tarojs/taro";
import _ from "lodash";

import "./Award.scss";

export type HeaderProps = {
  data: {
    name: string;
    year: string;
    institution: string;
  }[];
};

export default class extends Component<HeaderProps> {
  static defaultProps: HeaderProps = {
    data: [{ name: "", year: "", institution: "" }]
  };

  render() {
    const { data } = this.props;
    return (
      <View className="awards">
        {data.map((item, idx) => (
          <View className="award" key={idx}>
            <View className="icon-wrapper">
              {idx === 0 ? (
                <Image
                  src={require("./dot-circle.png")}
                  className="icon-circle"
                  mode="scaleToFill"
                />
              ) : (
                <Image
                  src={require("./dot.png")}
                  className="icon"
                  mode="scaleToFill"
                />
              )}
            </View>
            <View className="text">
              <Text className="institution">{item.institution}</Text>
              <View className="award-text">
                {item.year}，{item.name}
              </View>
            </View>
          </View>
        ))}
      </View>
    );
  }
}
