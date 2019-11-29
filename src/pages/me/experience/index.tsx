import Taro, { Component, Config } from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";

import { WhiteSpace, Card } from "../../../components";
import ExperienceCard from "./ExperienceCard";
import IdentityCell from "./IdentityCell";

import "./index.scss";

type MeProps = {};

type MeState = {
  avatar: string;
  name: string;
  description: string;
};

export default class Me extends Component<MeProps, MeState> {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: "Experience"
  };

  constructor() {
    super(...arguments);
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const experience = [
      // {
      //   image:
      //     "https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191124081859.png",
      //   englishTitle: "Master",
      //   chineseTitle: "XX经理",
      //   duration: "2010-2012",
      //   description:
      //     "Save your favorite articles to read offline, sync your reading lists across devices and customize your reading experience with the official Wikipedia app."
      // },
      {
        image:
          "https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191124081859.png",
        englishTitle: "CTO",
        chineseTitle: "XX经理",
        duration: "2010-2012",
        description:
          "Wikipedia is hosted by the Wikimedia Foundation, a non-profit organization that also hosts a range of other projects."
      }
    ];

    const identities = [
      {
        image:
          "https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191124081859.png",
        company: "Quanda",
        title: "Founder"
      },
      {
        image:
          "https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191124081859.png",
        company: "UXDE",
        title: "Founder UED Director"
      },
      {
        image:
          "https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191124081859.png",
        company: "Quanda",
        title: "Interaction Designer"
      },
      {
        image:
          "https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191124081859.png",
        company: "THISWAY!",
        title: "Design Consultant"
      }
    ];
    return (
      <View>
        <ExperienceCard data={experience} />
        <WhiteSpace />
        <Card title="Extra Identities">
          <IdentityCell data={identities} />
        </Card>
      </View>
    );
  }
}
