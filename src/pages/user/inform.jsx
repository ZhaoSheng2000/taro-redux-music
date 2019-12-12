import Taro, {Component} from '@tarojs/taro'
import {View, Text} from '@tarojs/components'
import {connect} from '@tarojs/redux'
import {AtAvatar, AtTag, AtCalendar, AtCard} from "taro-ui"

@connect(({user}) => ({
  user
}))
export default class Inform extends Component {

  config = {
    navigationBarTitleText: '个人中心'
  }

  componentWillMount() {
  }

  componentDidMount() {

  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  render() {
    const {user} = this.props.user;
    const avantar = user.profile.avatarUrl;
    const guanzhu = user.profile.follows;
    const fensi = user.profile.followeds;
    const {signature} = user.profile;
    const {nickname} =user.profile;
    const birth = new Date(user.profile.birthday);
    return (
      <View>
        <View className='at-row'>
          <View className='at-col-3'>
            <AtAvatar
              className='myadvavtar'
              image={avantar}
              size={"large"}
              circle
            />
          </View>
          <View className='at-col-6 nick-name'>
            <Text>{nickname}</Text>
          </View>
          <View className='at-col-3 user-level'>
            <AtTag size='small' circle>关注{guanzhu}</AtTag><AtTag size='small' circle>粉丝{fensi}</AtTag>
          </View>
        </View>
        <Text className='user-inform'>{signature}\n\n</Text>
        <AtCard
          title='生日'
        >
          <AtCalendar currentDate={birth} isSwiper="false"/>
        </AtCard>
      </View>

    )
  }
}

