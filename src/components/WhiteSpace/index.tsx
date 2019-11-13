import { View } from '@tarojs/components'
import { Component } from '@tarojs/taro'
import './index.scss'

type WhiteSpaceProps = {
  footer?: boolean
}

export default class extends Component<WhiteSpaceProps> {
  render() {
    const { footer } = this.props
    return (
      <View
        className='white-space'
        style={footer ? { height: '4rem' } : undefined}
      />
    )
  }
}
