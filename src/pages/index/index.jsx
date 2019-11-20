import Taro, {Component} from '@tarojs/taro'
import {View, Swiper, SwiperItem, Image} from '@tarojs/components'
import {AtTabBar,AtSearchBar } from 'taro-ui'
import './index.less'

import {isLogin} from '../../utils/tools'
import {banner} from '../../service/api'

 class Index extends Component {

  config = {
    navigationBarTitleText: '盛-云音乐'
  }
  state = {
    images: '',
    current: 0,
  }


  componentWillMount() {
  }

  componentDidMount() {
    banner({
      type: 1
    }).then(res => {
      this.setState({images: res.data.banners})
    }).catch(err => {
      console.log(err)
    })
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }


  handleClick(value) {
    this.setState({
      current: value
    })
    switch (value) {
      case 1: {
        if (isLogin()) {
          Taro.redirectTo({url: '/pages/user/inform'})
        } else {
          Taro.redirectTo({url: '/pages/auth/login'});
        }
      }
        break;
      default:
        break;

    }
  }


  render() {
    const {images} = this.state
    return (
      <View className='index'>
        <AtTabBar
          fontSize='15'
          iconSize='15'
          tabList={[
            { title: '发现', text: 8 },
            { title: '我的' },
            { iconType: 'search' },
          ]}
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
        />
        <Swiper
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
          indicatorDots
          autoplay
          interval={3000}
        >
          {
            images.map(img => (
              <SwiperItem>
                <Image className='swiper-img' src={img.pic}/>
              </SwiperItem>
            ))
          }
        </Swiper>

      </View>
    )
  }
}
export default Index
