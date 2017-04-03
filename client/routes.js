// modules/routes.js
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import SuperContainer from './modules/SuperContainer'
import Repos from './modules/Repos/Container'
import Home from './modules/Home/Container'

const routes = (
  <Route path="/" component={SuperContainer}>
    <IndexRoute component={Home}/>
    <Route path="/repos" component={Repos}/>
  </Route>
)


export default routes;