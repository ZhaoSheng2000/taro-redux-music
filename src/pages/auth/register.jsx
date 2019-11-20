import Taro, {Component} from '@tarojs/taro'
import {View,Text} from '@tarojs/components'
import {AtForm, AtInput, AtButton} from 'taro-ui'

export default class Register extends Component {

  config = {
    navigationBarTitleText: '注册'
  }
  state={
    username:'',
    password:'',
    rePassword:''
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
  reg=()=>{

    console.log(this.state)
  };

  render() {
    return (
      <View className='index'>
        <AtForm>
          <AtInput
            type={'text'}
            placeholder={'请输入用户名'}
            title={'用户名'}
            onChange={(e) =>this.setState({username:e})}
          />
          <AtInput
            type={'password'}
            placeholder={'请输入密码'}
            title={'密码'}
          onChange={(e) =>this.setState({password:e})}
          />
          <AtInput
          type={'password'}
          placeholder={'请确认密码'}
          title={'确认密码'}
          onBlur={(e) =>this.setState({rePassword:e})}
          />
        </AtForm>
        <AtButton type={"primary"} onClick={this.reg}>注册</AtButton>
        <Text className={'link-reg-login'} onClick={() =>Taro.redirectTo({url: '/pages/auth/login'})}>已有账号，去登陆</Text>
      </View>
    )
  }
}
