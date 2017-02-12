// Copyright (c) 2016 Practice Insight Pty Ltd. All rights reserved.
// @flow
import "babel-polyfill"
import React, {Component} from "react"
import {createStore} from "redux"
import ReactDOM from "react-dom"
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import App from './App'

ReactDOM.render(<Provider store={configureStore()}>
  <App />
  </Provider>,
  document.getElementById('root'));
