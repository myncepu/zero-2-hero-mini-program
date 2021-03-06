import Taro, { Component, Config } from "@tarojs/taro";
import { Swiper, SwiperItem, View, Image } from "@tarojs/components";
import QueryString from "query-string";

import { Card, WhiteSpace } from "../../components";
import Intro from "./Intro";
import Design from "./Design";
import Coding from "./Coding";
import Article from "./Article";

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
  designData: {
    title: string;
    type: string;
    cover: string;
    to: string;
  }[];
  codingData: {
    title: string;
    description: string;
    type: string;
    cover: string;
    href: string;
  }[];
  articleData: {
    title: string;
    description: string;
    type: string;
    cover: string;
    date: Date;
    url: string;
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
      },
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
      ],
      codingData: [
        {
          title: "ZERO TO HERO MINI PROGRAM",
          description: "Taro mini program",
          type: "sketch",
          href: "https://github.com/myncepu/zero-2-hero-mini-program",
          cover:
            "https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191118160529.png"
        },
        {
          title: "Chrome extension",
          description: "Chrome automation",
          type: "chrome",
          href: "https://github.com/myncepu/zero-2-hero-mini-program",
          cover:
            "https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191118160529.png"
        }
      ],
      articleData: [
        {
          title: "DAY 05 DEV NOTE",
          description:
            ":last-child 选择器、sass 父选择器 & 使用联图 API 生成二维码",
          type: "Taro",
          cover:
            "https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191118160529.png",
          date: new Date("2019-11-17"),
          url:
            "https://raw.githubusercontent.com/myncepu/zero-2-hero-mini-program/master/docs/DAY-05.md"
        },
        {
          title: "DAY 04 DEV NOTE",
          description:
            "CSS3 关键帧和其他组件 CSS3 keyframes and other components",
          type: "Taro",
          cover:
            "https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191118160529.png",
          date: new Date("2019-11-18"),
          url:
            "https://raw.githubusercontent.com/myncepu/zero-2-hero-mini-program/master/docs/DAY-04.md"
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
    const {
      SwiperImagesUrls,
      intro,
      designData,
      codingData,
      articleData
    } = this.state;

    const params = QueryString.stringify({
      url: "https://github.com/myncepu",
      title: "GITHUB: MYNCEPU"
    });
    const personalGithubPage = `/pages/qrcode/index?${params}`;

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
          <Card title="文章" btn="查看我的 Blog" tab to="/pages/blog/index">
            <Article data={articleData} />
          </Card>
          <WhiteSpace />
          <Card
            title="Design"
            btn="View my design projects"
            tab
            to="/pages/project/index"
          >
            <Design data={designData} />
          </Card>
          <WhiteSpace />
          <Card title="自我介绍" btn="查看" padding tab to="/pages/me/index">
            <Intro
              skills={intro.skills}
              title={intro.title}
              description={intro.description}
            />
          </Card>
          <WhiteSpace />
          <Card title="Coding" btn="查看我的代码仓库" to={personalGithubPage}>
            <Coding data={codingData} />
          </Card>
          <WhiteSpace />
        </View>
      </View>
    );
  }
}
