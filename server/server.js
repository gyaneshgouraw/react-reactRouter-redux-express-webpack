/* eslint-disable no-console, no-use-before-define */

import path from 'path'
import Express from 'express'
import qs from 'qs'

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../webpack.config'

import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'

import { match, RouterContext } from 'react-router'
import routes from '../client/routes'


import configureStore from '../common/store/configureStore'


const app = new Express()
const port = 3002

// Use this middleware to set up hot module reloading via webpack.
const compiler = webpack(webpackConfig)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

// This is fired every time the server side receives a request
app.use(handleRender)

function handleRender(req, res) {
  
// preloading state with reducer default values
       let preloadedState = {
            home : {}
          }

  match({ routes, location: req.url }, (err, redirect, renderProps) => {
      if(renderProps){
        if(req.url === '/repos'){
          preloadedState = {...preloadedState,repos : {repoList:['Server Rendered 1','2','3','4']}}
        }
          const store = configureStore(preloadedState)
          const html = renderToString(
            <Provider store={store}>
                <RouterContext {...renderProps}/>
            </Provider>
          )
          const finalState = store.getState()
          res.send(renderFullPage(html, finalState))
        }
        else{
          res.send('This is not the listed route',202)
        }
  })
}

function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\x3c')}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `
}

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`)
  }
})
