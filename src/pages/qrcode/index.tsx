import Taro, { Component, Config } from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";
import QueryString from "query-string";

import "./index.scss";

type IndexProps = {};

type IndexState = {
  url: string;
  title: string;
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
      url: "",
      title: ""
    };
  }

  copyUrl = () => {
    const { url, title } = this.$router.params;
    this.setState({ url, title });
    Taro.setClipboardData({ data: url });
  };

  componentWillMount() {}

  componentDidMount = () => {
    this.copyUrl();
  };

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const { url, title } = this.state;
    const qrcode =
      "http://qr.liantu.com/api.php?" +
      QueryString.stringify({
        w: 720,
        m: 48,
        el: "l",
        pt: "9d8352",
        text: url
      });

    return (
      <View className="page" onClick={this.copyUrl}>
        <Image className="image" src={qrcode} mode="widthFix" />
        <View className="text">
          <Text className="title">{title}</Text>
          <Text className="url">{url}</Text>
        </View>
      </View>
    );
  }
}
