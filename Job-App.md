## 合并reducer
> 多个reducer ,用combineReducers 合并

> conbineReducers({counter, auth})


## axios 跨域

> 使用proxy 转发
> 在package.json 中最后一行添加 "proxy": "http://localhost:9093"


## 拦截器
拦截请求
> axios.interceptors.request.use(function(config){   return config  })

拦截响应
> axios.interceptors.response.use(function(config){  return config })

## 使用cookie 
> npm install cookie-parser  --save


## rdeux js跳转
> this.props.history.push('/login') 