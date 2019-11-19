import Taro, { Component, Config } from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";
import moment from "moment";

import { Card, WhiteSpace, Project } from "../../components";

import "./index.scss";

type IndexProps = {};

type IndexState = {
  postData: {
    title: string;
    date: Date;
    description: string;
    cover: string;
  }[];
  designData: {
    title: string;
    type: string;
    cover: string;
    to: string;
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
            "https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191118220324.jpg"
        }
      ],
      designData: [
        {
          title: "项目1",
          type: "Code",
          cover:
            "https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191110231920.jpg",
          to: ""
        },
        {
          title: "项目2",
          type: "Code",
          cover:
            "https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191110231920.jpg",
          to: ""
        },
        {
          title: "项目3",
          type: "Code",
          cover:
            "https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191110231920.jpg",
          to: ""
        },
        {
          title: "项目4",
          type: "Code",
          cover: "",
          to:
            "https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191113081949.png"
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
    const { designData } = this.state;
    return (
      <View className="page">
        <View className="header">
          <Text className="title">Project Story</Text>
          <Text className="description">
            I'm description
            <Text>_</Text>
          </Text>
        </View>
        <View className="design">
          {designData.map((item, i) => (
            <View
              className="project"
              key={item.title}
              // onClick={this.navigateTo.bind(this, item.to)}
            >
              <Project data={item} num={i + 1} />
            </View>
          ))}
        </View>
      </View>
    );
  }
}
