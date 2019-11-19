import { View, Image, Text } from "@tarojs/components";
import Taro, { Component } from "@tarojs/taro";
import _ from "lodash";
import "./Coding.scss";

type ProjectsProps = {
  data: {
    title: string;
    description: string;
    type: string;
    cover: string;
  }[];
};

export default class extends Component<ProjectsProps> {
  render() {
    const { data } = this.props;
    return (
      <View className="coding">
        {data.map((item, idx) => (
          <View className="box" key={idx} hoverClass="box-hover">
            <Image
              src={item.cover}
              style={{ width: "50px", height: "50px", borderRadius: "5px" }}
              mode="aspectFill"
            />
            <View className="text">
              <Text className="title">{item.title}</Text>
              <Text className="description">{item.description}</Text>
              <Text className="type">{item.type}</Text>
            </View>
          </View>
        ))}
      </View>
    );
  }
}
