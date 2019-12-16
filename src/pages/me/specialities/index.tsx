import Taro, { Component, Config } from "@tarojs/taro";
import { View } from "@tarojs/components";

import { WhiteSpace } from "../../../components";
import SpecialtyCell from "./SpecialtyCell";

import "./index.scss";

type SpecialitiesProps = {};

type SpecialitiesState = {
  avatar: string;
  name: string;
  description: string;
};

export default class Specialities extends Component<
  SpecialitiesProps,
  SpecialitiesState
> {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: "Specialities"
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
    const specialities = [
      {
        image:
          "https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191124081859.png",
        description:
          "心里的花 我想要带你回家 在那深夜酒吧 哪管它是真是假 请你尽情摇摆 忘记钟意的他 你是最迷人噶 你知道吗 这是最好的节拍 这是最爱的节拍 前面儿哪里来的大井盖 我拿脚往里踹 如此动感的节拍 非得搁门口耍帅 我蹦迪的动线上面儿怎么能有障碍",
        btn: "深夜酒吧"
      },
      {
        image:
          "https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191124081859.png",
        description:
          "心里的花 我想要带你回家 在那深夜酒吧 哪管它是真是假 请你尽情摇摆 忘记钟意的他 你是最迷人噶 你知道吗 这是最好的节拍 这是最爱的节拍 前面儿哪里来的大井盖 我拿脚往里踹 如此动感的节拍 非得搁门口耍帅 我蹦迪的动线上面儿怎么能有障碍",
        btn: "深夜酒吧"
      },
      {
        image:
          "https://person-blog-1255441669.cos.ap-beijing.myqcloud.com/images/20191124081859.png",
        description:
          "心里的花 我想要带你回家 在那深夜酒吧 哪管它是真是假 请你尽情摇摆 忘记钟意的他 你是最迷人噶 你知道吗 这是最好的节拍 这是最爱的节拍 前面儿哪里来的大井盖 我拿脚往里踹 如此动感的节拍 非得搁门口耍帅 我蹦迪的动线上面儿怎么能有障碍",
        btn: "深夜酒吧"
      }
    ];

    return (
      <View>
        {specialities.map(specialty => (
          <View>
            <SpecialtyCell data={specialty} />
            <WhiteSpace />
          </View>
        ))}
      </View>
    );
  }
}
