import Taro, { Component, Config } from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";
import moment from "moment";

import { Card, WhiteSpace } from "../../components";

import "./index.scss";

type IndexProps = {};

type IndexState = {
  postData: {
    title: string;
    date: Date;
    description: string;
    cover: string;
  }[];
};

export default class Index extends Component<IndexProps, IndexState> {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: "BLOG"
  };

  constructor() {
    super(...arguments);
    this.state = {
      postData: [
        {
          title: "厦门",
          date: new Date("2018-11-20"),
          description: "What a wonderful day!",
          cover:
            "https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191118210713.jpg"
        },
        {
          title: "烟台",
          date: new Date("2018-05-20"),
          description: "Beautiful sand",
          cover:
            "https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191118213757.JPG"
        }
      ]
    };
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const { postData } = this.state;
    return (
      <View className="page">
        {postData.map(post => {
          const { title, date, description, cover } = post;
          return (
            <View>
              <Card tab>
                <View className="post" hoverClass="post-hover">
                  <View className="text">
                    <View className="first-row">
                      <Text className="title">{title}</Text>
                      <Text className="date">{moment(date).format("LL")}</Text>
                    </View>
                    <Text className="description">{description}</Text>
                  </View>
                  <Image lazyLoad className="image" mode="center" src={cover} />
                </View>
              </Card>
              <WhiteSpace />
            </View>
          );
        })}
      </View>
    );
  }
}
