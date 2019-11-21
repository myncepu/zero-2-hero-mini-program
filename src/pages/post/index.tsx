import Taro, { Component, Config } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";

import { Loading } from "../../components";

import "./index.scss";

type IndexProps = {};

type IndexState = {
  loading: boolean;
  md: string;
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
    navigationBarTitleText: "BLOG",
    usingComponents: {
      wemark: "../../wemark/wemark"
    }
  };

  constructor() {
    super(...arguments);
    this.state = {
      loading: true,
      md: ""
    };
  }

  componentWillMount() {}

  componentDidMount = () => {
    const { url } = this.$router.params;
    Taro.request({
      url:
        url === undefined
          ? "https://raw.githubusercontent.com/myncepu/zero-2-hero-mini-program/master/docs/DAY-05.md"
          : url,
      success: res => {
        this.setState({
          loading: false,
          md: res.data
        });
      }
    });
  };

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const { loading, md } = this.state;
    const regex = /<img .*src=['"]{1}([a-zA-Z0-9_=:\/\-\.]+)['"]{1}.*\/>/gm;
    const mdWithoutImageTag = md.replace(regex, "![图片]($1)");

    return (
      <View className="page">
        {loading ? (
          <Loading />
        ) : (
          <wemark md={mdWithoutImageTag} link highlight type="wemark" />
        )}
      </View>
    );
  }
}
