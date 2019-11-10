import Taro, { Component, Config } from '@tarojs/taro'
import { Swiper, SwiperItem, View, Image } from '@tarojs/components'
import './index.scss'

type IndexProps = {}

type IndexState = {
  imgUrls: string[]
}
export default class Index extends Component<IndexProps, IndexState> {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: 'HEY',
  }

  constructor() {
    super(...arguments)
    this.state = {
      imgUrls: [
        'https://img10.360buyimg.com/babel/s700x360_jfs/t25855/203/725883724/96703/5a598a0f/5b7a22e1Nfd6ba344.jpg!q90!cc_350x180',
        'https://img11.360buyimg.com/babel/s700x360_jfs/t1/4776/39/2280/143162/5b9642a5E83bcda10/d93064343eb12276.jpg!q90!cc_350x180',
        'https://img14.360buyimg.com/babel/s700x360_jfs/t1/4099/12/2578/101668/5b971b4bE65ae279d/89dd1764797acfd9.jpg!q90!cc_350x180',
      ],
    }
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const { imgUrls } = this.state

    return (
      <View className='page'>
        <View className='example-item'>
          <Swiper
            indicatorColor='#999'
            indicatorActiveColor='#333'
            circular={true}
            autoplay={true}
            indicatorDots={true}
          >
            {imgUrls.map((item, idx) => (
              <SwiperItem key={idx}>
                <Image src={item} className='slide-image' />
              </SwiperItem>
            ))}
          </Swiper>
        </View>
      </View>
    )
  }
}
