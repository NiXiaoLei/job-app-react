import React from 'react'
import ReactDom from 'react-dom'

import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducer'
import { Provider } from 'react-redux'
import  thunk  from 'redux-thunk'

import axios from 'axios'
import './config'
// 导入路由
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import Login from './container/login/login'
import Register from './container/register/register'
import AuthRouter from './conponent/authroute/authroute'

// 第三个参数 开启中间件    @(reducer, 初始值, 开启中间件 applyMiddleware )
// compose 是对几个中间件函数进行组合
const store = createStore(reducers,  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)) 

ReactDom.render(
    <Provider  store={store}>
      <BrowserRouter>
         <div>
             <AuthRouter></AuthRouter>
             <Route path='/login' component={Login} ></Route>
             <Route path='/register' component={Register} ></Route>
         </div>
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)
