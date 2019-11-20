import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtList, AtListItem ,AtAvatar } from "taro-ui"
import {getToken} from '../../utils/tools'
import {detail} from '../../service/api'

export default class Inform extends Component {

  config = {
    navigationBarTitleText: '个人中心'
  }

  componentWillMount () { }

  componentDidMount () {
    const uid=getToken();
    detail({
      uid:uid
    }).then(res=>{
      console.log(res)
      const response = res.data
    })
      .catch(err=>{
        console.log(err)
      })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <AtAvatar image='https://jdc.jd.com/img/200' size={"large"} circle/>
        <AtList>
          <AtListItem title='标题文字' extraText='详细信息' />
        </AtList>
      </View>
    )
  }
}

