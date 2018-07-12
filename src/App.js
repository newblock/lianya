import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './pages/login/login'
import Register from './pages/register/register'

function MainPage(){
  return <h2>主页</h2>
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path='/login' component={Login}></Route>
            <Route path='/register' component={Register}></Route>
            <Route path='/mainpage' component={MainPage}></Route>
            <Route component={Login}></Route>
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
