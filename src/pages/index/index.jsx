import Taro, {Component} from '@tarojs/taro'
import {View, Swiper, SwiperItem, Image, Text} from '@tarojs/components'
import {connect} from '@tarojs/redux'
import {AtTabBar, AtGrid, AtDivider, AtCard} from 'taro-ui'
import './index.less'
import {isLogin} from '../../utils/tools'
import {banner} from '../../service/api'
import {hotwall} from "../../actions/hotwall";

@connect(({wall}) => ({
    wall
  }), (dispatch) => ({
    hotwall() {
      dispatch(hotwall())
    }
  })
)




class Index extends Component {

  config = {
    navigationBarTitleText: '云村热评墙'
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
    this.props.hotwall()
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
          Taro.navigateTo({url: '/pages/user/inform'})
        } else {
          Taro.navigateTo({url: '/pages/auth/login'});
        }
      }
        break;
      default:
        break;

    }
  }


  render() {
    const {wall} = this.props.wall
    const {images} = this.state
    return (
      <View className='index'>
        <AtTabBar
          fontSize='15'
          iconSize='15'
          tabList={[
            {title: '发现', text: 8},
            {title: '我的'},
            {iconType: 'search'},
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
        <AtDivider content='精品歌单'/>
        <AtGrid
          hasBorder={false}
          data={
            [
              {
                image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
                value: '领取中心'
              },
              {
                image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
                value: '找折扣'
              },
              {
                image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
                value: '领会员'
              },
              {
                image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
                value: '新品首发'
              },
              {
                image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
                value: '领京豆'
              },
              {
                image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
                value: '手机馆'
              }
            ]
          }/>
        <AtDivider content='云村热评'/>
        {
          wall.map(mywall => (
              <AtCard
                className='index-card'
                note={'——'+mywall.simpleUserInfo.nickname}
                title={'《' + mywall.simpleResourceInfo.name + '》'}
                thumb={mywall.simpleUserInfo.avatar}
              >
                <Image className='index-wall-img' src={mywall.simpleResourceInfo.songCoverUrl}/>
                {mywall.content}
              </AtCard>
            )
          )
        }
      </View>
    )
  }
}

export default Index
