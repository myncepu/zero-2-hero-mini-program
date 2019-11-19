import { View, Image, Text } from "@tarojs/components";
import Taro, { Component } from "@tarojs/taro";
import _ from "lodash";
import QueryString from "query-string";
import "./Coding.scss";

type ProjectsProps = {
  data: {
    title: string;
    description: string;
    type: string;
    cover: string;
    href: string;
  }[];
};

export default class extends Component<ProjectsProps> {
  navigateTo(props) {
    const url = `/pages/qrcode/index?${props}`;
    Taro.navigateTo({ url });
  }

  render() {
    const { data } = this.props;
    return (
      <View className="coding">
        {data.map((item, idx) => {
          const url = QueryString.stringify({
            url: item.href,
            title: item.title
          });
          return (
            <View
              className="box"
              key={idx}
              hoverClass="box-hover"
              onClick={this.navigateTo.bind(this, url)}
            >
              <Image src={item.cover} mode="aspectFill" className="image" />
              <View className="text">
                <Text className="title">{item.title}</Text>
                <Text className="description">{item.description}</Text>
                <Text className="type">{item.type}</Text>
              </View>
            </View>
          );
        })}
      </View>
    );
  }
}
