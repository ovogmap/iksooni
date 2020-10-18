import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MainContainer from '../container/MainContainer'
import AuthContainer from '../container/AuthContainer'
import WritingContainer from '../container/WritingContainer'
export default () => {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/" component={MainContainer} />
        <Route path="/auth" component={AuthContainer} />
        <Route path="/writing" component={WritingContainer} />
      </Switch>
    </Router>
  )
}