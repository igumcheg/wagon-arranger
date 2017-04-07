// Copyright (c) 2016 Practice Insight Pty Ltd. All rights reserved.
// @flow
import "babel-polyfill"
import React, {Component} from "react"
import ReactDOM from "react-dom"
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import App from './App'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
ReactDOM.render(<Provider store={configureStore()}>
  <App />
  </Provider>,
  document.getElementById('root'));
