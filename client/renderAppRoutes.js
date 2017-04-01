
import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import routes from './routes';

export default class AppRoutes extends React.Component {
  render() {
    return (
      <Router routes={routes} history={browserHistory} />
    );
  }
}