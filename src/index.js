import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { userReducer } from './redux/user.redux'

import App from './App';

//const store = createStore(userReducer)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
