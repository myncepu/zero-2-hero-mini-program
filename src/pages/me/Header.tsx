import { View, Image, Text } from "@tarojs/components";
import Taro, { Component } from "@tarojs/taro";
import _ from "lodash";
import "./Header.scss";

export type HeaderProps = {
  avatar: string;
  name: string;
  description: string;
  otherInfo: {
    value: string;
    unit: string;
  }[];
};

export default class extends Component<HeaderProps> {
  static defaultProps: HeaderProps = {
    avatar: "",
    name: "",
    description: "",
    otherInfo: [{ value: "", unit: "" }]
  };

  render() {
    const { avatar, name, description, otherInfo } = this.props;
    return (
      <View className="header">
        <View className="basic-info">
          <Image className="avatar" src={avatar} />
          <View className="text">
            <Text className="name">{name}</Text>
            <Text className="description">{description}</Text>
          </View>
        </View>
        <View className="other-info-wrapper">
          {otherInfo.map((info, idx) => (
            <View className="other-info" key={idx}>
              <Text className="value">{info.value}</Text>
              <Text className="unit">{info.unit.toUpperCase()}</Text>
            </View>
          ))}
        </View>
      </View>
    );
  }
}
