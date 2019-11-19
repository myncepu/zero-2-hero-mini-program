import { View } from '@tarojs/components'
import { Component } from '@tarojs/taro'
import { Skills } from '../../components'
import './Intro.scss'

type IntroProps = {
  skills: {
    title: string
    iconURL: string
  }[]
  title: string
  description: string
}

export default class extends Component<IntroProps> {
  render() {
    const { skills, title, description } = this.props
    return (
      <View className='intro'>
        <Skills data={skills} />
        <View className='content'>
          <View className='title'>{title}</View>
          <View className='desc'>{description}</View>
        </View>
      </View>
    )
  }
}
