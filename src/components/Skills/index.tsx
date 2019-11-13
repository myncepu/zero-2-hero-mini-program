import { Image, Text, View } from '@tarojs/components'
import { Component } from '@tarojs/taro'
import './index.scss'

type SkillsProps = {
  data: {
    iconURL: string
    title: string
  }[]
}
export default class extends Component<SkillsProps> {
  render() {
    const { data = [] } = this.props
    return (
      <View className='skills'>
        {data.map((item, i) => (
          <View className='box' key={i}>
            <Image lazyLoad src={item.iconURL} mode='widthFix' />
            <Text>{item.title}</Text>
          </View>
        ))}
      </View>
    )
  }
}
