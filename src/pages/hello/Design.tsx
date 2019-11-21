import { View } from "@tarojs/components";
import Taro, { Component } from "@tarojs/taro";
import _ from "lodash";
import { Project } from "../../components";
// import "./Design.scss";

type ProjectsProps = {
  data: {
    title: string;
    type: string;
    cover: string;
    to: string;
  }[];
};

export default class extends Component<ProjectsProps> {
  static defaultProps: ProjectsProps = {
    data: [{ title: "", type: "", cover: "", to: "" }]
  };
  // navigateTo(filename) {
  //   filename = _.last(filename.split(/\//g))
  //   const url =
  //     filename === 'instant-zine'
  //       ? '/routes/instant/index'
  //       : `/routes/post/index?id=${filename}`
  //   Taro.navigateTo({ url })
  // }

  render() {
    const { data } = this.props;
    return (
      <View className="design">
        {data.map((item, i) => (
          <View
            className="project"
            key={item.title}
            // onClick={this.navigateTo.bind(this, item.to)}
          >
            <Project data={item} num={i + 1} />
          </View>
        ))}
      </View>
    );
  }
}
