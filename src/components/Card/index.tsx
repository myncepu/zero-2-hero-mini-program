import { View } from '@tarojs/components'
import Taro, { Component } from '@tarojs/taro'
import './index.scss'

type CardProps = {
  title?: string
  btn?: string
  padding?: boolean
  to?: string
  tab?: boolean // switchTab 还是当前 tab 内打开
}

export default class extends Component<CardProps> {
  switchTab(url) {
    Taro.switchTab({ url })
  }

  navigateTo(url) {
    Taro.navigateTo({ url })
  }

  render() {
    const { title, btn, padding, to, tab } = this.props
    const s = {
      padding: '1rem',
    }
    return (
      <View className='card'>
        {title ? <View className='header'>{title}</View> : null}
        {title ? <View className='split' /> : null}
        <View className='body' style={padding ? s : undefined}>
          {this.props.children}
        </View>
        {btn ? <View className='split' /> : null}
        {btn && !tab ? (
          <View
            className='footer'
            hoverClass='footer-hover'
            onClick={this.navigateTo.bind(this, to)}
          >
            {btn}
          </View>
        ) : null}
        {btn && tab ? (
          <View
            className='footer'
            hoverClass='footer-hover'
            onClick={this.switchTab.bind(this, to)}
          >
            {btn}
          </View>
        ) : null}
      </View>
    )
  }
}
