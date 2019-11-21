import { View, Image, Text } from "@tarojs/components";
import Taro, { Component } from "@tarojs/taro";
import moment from "moment";
import _ from "lodash";

import "./Article.scss";

type ArticleProps = {
  data: {
    title: string;
    description: string;
    type: string;
    cover: string;
    date: Date;
    url: string;
  }[];
};

export default class extends Component<ArticleProps> {
  static defaultProps: ArticleProps = {
    data: [
      {
        title: "",
        description: "",
        type: "",
        cover: "",
        date: new Date(),
        url: ""
      }
    ]
  };
  navigateTo(props) {
    const url = `/pages/post/index?${props}`;
    Taro.navigateTo({ url });
  }

  render() {
    const { data } = this.props;
    return (
      <View className="article">
        {data.map((item, idx) => (
          <View
            onClick={this.navigateTo.bind(this, item.url)}
            key={idx}
            className="box"
            hoverClass="box-hover"
          >
            <Image src={item.cover} className="image" mode="aspectFill" />
            <View className="text">
              <Text className="title">{item.title}</Text>
              <Text className="description">{item.description}</Text>
              <View className="meta">
                <Text className="type">{item.type}</Text>
                <Text>{moment(item.date).format("LL")}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    );
  }
}
