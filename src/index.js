import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { userReducer } from './redux/user.redux'
import axios from 'axios'

import App from './App';
import './index.css'

//const store = createStore(userReducer)
//axios.defaults.baseURL = 'https://api.example.com';

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
