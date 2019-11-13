import Taro, { Component, Config } from "@tarojs/taro";
import { Swiper, SwiperItem, View, Image } from "@tarojs/components";

import { Card, WhiteSpace } from "../../components";
import Intro from "./Intro";
import Design from "./Design";

import "./index.scss";

type IndexProps = {};

type IndexState = {
  SwiperImagesUrls: string[];
  intro: {
    skills: {
      iconURL: string;
      title: string;
    }[];
    title: string;
    description: string;
  };
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
    navigationBarTitleText: "HOME"
  };

  constructor() {
    super(...arguments);
    this.state = {
      SwiperImagesUrls: [
        "https://img10.360buyimg.com/babel/s700x360_jfs/t25855/203/725883724/96703/5a598a0f/5b7a22e1Nfd6ba344.jpg!q90!cc_350x180",
        "https://img11.360buyimg.com/babel/s700x360_jfs/t1/4776/39/2280/143162/5b9642a5E83bcda10/d93064343eb12276.jpg!q90!cc_350x180",
        "https://img14.360buyimg.com/babel/s700x360_jfs/t1/4099/12/2578/101668/5b971b4bE65ae279d/89dd1764797acfd9.jpg!q90!cc_350x180"
      ],
      intro: {
        title: "DO NOT REPEAT YOURSELF",
        description:
          "本质上，我们的工作都是重复的，凡是能够简化这种重复过程的方法，都可以大幅度提高我们的效率。",
        skills: [
          {
            title: "React",
            iconURL:
              "https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191110222621.png"
          },
          {
            title: "Expo",
            iconURL:
              "https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191110223120.jpg"
          },
          {
            title: "TypeScript",
            iconURL:
              "https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191110223346.png"
          },
          {
            title: "Vim",
            iconURL:
              "https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191110223458.png"
          }
        ]
      }
    };
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const { SwiperImagesUrls, intro } = this.state;

    return (
      <View className="page">
        <View className="example-item">
          <Swiper
            indicatorColor="#999"
            indicatorActiveColor="#333"
            circular={true}
            autoplay={true}
            indicatorDots={true}
          >
            {SwiperImagesUrls.map((item, idx) => (
              <SwiperItem key={idx}>
                <Image src={item} className="slide-image" />
              </SwiperItem>
            ))}
          </Swiper>
          <View className="cover" hoverClass="cover-hover">
            <View className="mask" />
            <View className="split" />
            <View className="num">01</View>
          </View>
          <Card title="项目" btn="查看项目" padding tab>
            <Design
              data={[
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
              ]}
            />
          </Card>
          <WhiteSpace />
          <Card title="提高效率的方法" btn="查看" padding>
            <Intro
              skills={intro.skills}
              title={intro.title}
              description={intro.description}
            />
          </Card>
        </View>
      </View>
    );
  }
}
