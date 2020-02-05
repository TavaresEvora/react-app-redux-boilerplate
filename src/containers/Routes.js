import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from '../containers/App'

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </Router>
    )
  }
}

export default Routes