/* eslint-disable no-console, no-use-before-define */

import path from 'path'
//import Express from 'express'
import qs from 'qs'

import koa from 'koa'
import mount from 'koa-mount'
import koaStatic from 'koa-static'

import webpack from 'webpack'

import webpackConfig from '../webpack.config'

import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'

import { match, RouterContext } from 'react-router'
import routes from '../client/routes'


import configureStore from '../common/store/configureStore'


const app = new koa()
const port = 3002

// Use this middleware to set up hot module reloading via webpack.

app.use(mount('/static', koaStatic('dist')))

// This is fired every time the server side receives a request
app.use(handleRender)

function *handleRender(next) {
  
// preloading state with reducer default values
       let preloadedState = {
            home : {}
          }

  match({ routes, location:this.request.url }, (err, redirect, renderProps) => {
      if(renderProps){
        if(this.request.url === '/repos'){
          preloadedState = {...preloadedState,repos : {repoList:['Server Rendered 1','SSR 2','SSR 3',' SSR 4']}}
        }
          const store = configureStore(preloadedState)
          const html = renderToString(
            <Provider store={store}>
                <RouterContext {...renderProps}/>
            </Provider>
          )
          const finalState = store.getState()
          this.body = renderFullPage(html, finalState)
        }
        else{
          this.body = 'This is not the listed route'
        }
  })
  yield next
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
