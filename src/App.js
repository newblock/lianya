import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './pages/login/login'
import Register from './pages/register/register'
import MainPage from './pages/mainpage/mainpage'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path='/login' component={Login}></Route>
            <Route path='/register' component={Register}></Route>
            <Route path='/boss' component={MainPage}></Route>
            <Route component={MainPage}></Route>
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
