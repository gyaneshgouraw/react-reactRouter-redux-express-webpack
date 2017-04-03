import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from '../common/store/configureStore'

import AppRoutes from './renderAppRoutes';
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'




const preloadedState = window.__PRELOADED_STATE__
const store = configureStore(preloadedState)
const rootElement = document.getElementById('app')

render(
  <Provider store={store}>
    <AppRoutes/>
  </Provider>,
  rootElement
)
