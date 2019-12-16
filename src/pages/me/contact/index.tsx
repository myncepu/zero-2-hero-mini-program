import Taro, { Component, Config } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtInput, AtTextarea } from "taro-ui";

import { Header, WhiteSpace, Card } from "../../../components";
import ContactMethodRow from "./ContactMethodRow";

import "./index.scss";

type ContactProps = {};
type ContactState = {
  name: string;
  email: string;
  content: string;
};

export default class Contact extends Component<ContactProps, ContactState> {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: "Contact"
  };

  handleChangeName(name) {
    this.setState({
      name
    });
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return name;
  }

  handleChangeEmail(email) {
    this.setState({
      email
    });
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return email;
  }

  handleChangeContent(event) {
    this.setState({
      content: event.target.value
    });
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const CONTACT_DATA = [
      {
        text: "15200000000",
        icon: "https://canisminor.cc/img/contact-phone.png"
      },
      {
        text: "yan@pengqiang.me",
        icon: "https://canisminor.cc/img/contact-mail.png"
      },
      {
        text: "Yan",
        icon: "https://canisminor.cc/img/contact-linkedin.png"
      },
      {
        text: "435339616",
        icon: "https://canisminor.cc/img/contact-qq.png"
      },
      {
        text: "xxx",
        icon: "https://canisminor.cc/img/contact-wechat.png"
      }
    ];
    return (
      <View>
        <Header
          header="Let's Talk"
          description="Do you fancy saying hi to me or you need my help with your project? Feel free 2 contact me😊"
        />
        {CONTACT_DATA.map(contact => (
          <ContactMethodRow text={contact.text} icon={contact.icon} />
        ))}
        <WhiteSpace />
        <Card btn="SEND MESSAGE" title="Send Message">
          <AtInput
            name="value"
            title="NAME"
            type="text"
            placeholder="Your name"
            value={this.state.name}
            onChange={this.handleChangeName.bind(this)}
          />
          <AtInput
            name="value"
            title="E-MAIL"
            type="text"
            placeholder="Your email"
            value={this.state.email}
            onChange={this.handleChangeEmail.bind(this)}
          />
          <View className="text-area-wrapper">
            <AtTextarea
              value={this.state.content}
              onChange={this.handleChangeContent.bind(this)}
              maxLength={200}
              placeholder="你的问题是..."
            />
          </View>
        </Card>
      </View>
    );
  }
}
