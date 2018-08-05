import React, { Component } from 'react';
import Route from 'react-router-dom'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

// 用widthRouter 包裹就可以看到history对象
@withRouter
class AuthRoute extends Component {
  componentDidMount(){
    const publicList = ['/login', '/register']
    const pathname = this.props.location.pathname
    // 如果不在我们的公共列表中 继续往下执行
    if(publicList.indexOf(path)>-1) {
      return null
    }

    // 获取用户信息
    axios.get('/user/info')
      .then(res => {
        if( res.status == 200 ){
          if(res.data.code ===  0){
            console.log(res.data)
          }else{
            console.log(this.props.history.push('/login'))
          }
         
        }
      })
    // 是否登录
    
  }

  render() {
    return (
      <p>判断跳转的地方</p>
    );
  }
}

export default AuthRoute;
