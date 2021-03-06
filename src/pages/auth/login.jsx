import Taro, {Component} from '@tarojs/taro'
import {View,Text} from '@tarojs/components'
import {connect} from '@tarojs/redux'
import {AtForm, AtInput, AtButton} from 'taro-ui'
import {setToken} from '../../utils/tools'

import {login} from '../../actions/phonelogin'

@connect(({user})=>({
  user
}),(dispatch)=>({
  login(data){
    dispatch(login(data))
  }
}))
class Login extends Component {


  config = {
    navigationBarTitleText: '手机登陆'
  }
  state={
    username:'',
    password:''
  };
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

  submitHandle=()=>{
    if (!this.state.username){
      Taro.showToast({
        icon:'none',
        title:'请输入手机号！'
      })
    }else if (!this.state.password){
      Taro.showToast({
        icon:'none',
        title:'请输入密码！'
      })
    }
    else {
      this.props.login({
        phone:this.state.username,
        password:this.state.password
      })
    }

  }
  render() {
    const {user} = this.props
    if (user.user.code===200){
      Taro.showToast({
        title:'登陆成功'
      })
      setToken(user.user.account.id);
      Taro.navigateBack({url: '/pages/index/index'})
    }
    else if (user.message) {
      Taro.showToast({
        icon:'none',
        title:user.message
      })
    }


    return (
      <View className='index'>
        <AtForm>
          <AtInput
            type={'text'}
            placeholder={'请输入手机号'}
            title={'手机'}
            onChange={(e) =>this.setState({username:e})}
          />
          <AtInput
            type={'password'}
            placeholder={'请输入密码'}
            title={'密码'}
            onChange={(e) =>this.setState({password:e})}
          />
        </AtForm>
        <AtButton type={"primary"} onClick={this.submitHandle}>登陆</AtButton>
        <Text className={'link-reg-login'} onClick={() =>Taro.redirectTo({url: '/pages/auth/register'})}>没有账号，去注册\n</Text>
      </View>
    )
  }
}

export default Login
