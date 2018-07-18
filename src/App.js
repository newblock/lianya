import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './pages/login/login'
import Register from './pages/register/register'
import MainPage from './pages/mainpage/mainpage'
import BossInfo from './pages/bossinfo/bossinfo'
import NiurenInfo from './pages/niureninfo/niureninfo'
import Me from './pages/me/me'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path='/login' component={Login}></Route>
            <Route path='/register' component={Register}></Route>
            <Route path='/boss' component={MainPage}></Route>
            <Route path='/niuren' component={MainPage}></Route>
            <Route path='/me' component={MainPage}></Route>
            <Route path='/bossinfo' component={BossInfo}></Route>
            <Route path='/niureninfo' component={NiurenInfo}></Route>
            <Route path='/' component={Login}></Route>
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
