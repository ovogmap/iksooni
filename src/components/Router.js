import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomeContainer from '../container/HomeContainer'
import AuthContainer from '../container/AuthContainer'
import WritingContainer from '../container/WritingContainer'
import { useSelector, useDispatch } from 'react-redux'
import { authServise } from '../fbase';
import { onCurrUser, onLogin, onLogout } from '../store/modules/auth'
import { onStartLoading, onEndLoading } from '../store/modules/home'

export default () => {
  const { isLoading } = useSelector(state => state.home)
  const { isLogin } = useSelector(state => state.auth)
  const disPatch = useDispatch()
  useEffect(()=>{
    disPatch(onStartLoading())
    authServise.onAuthStateChanged((user) => {
      if(user){
        const currUser = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName
        }
        disPatch(onCurrUser(currUser))
        disPatch(onLogin())
      }
      disPatch(onEndLoading())
    })
  },[])
  return isLoading ? <div>로딩중</div> 
  : <Router>
      <Switch>
        <Route exact={true} path="/" component={HomeContainer} />
        <Route path="/auth" component={AuthContainer} />
        <Route path="/writing" component={WritingContainer} />
      </Switch>
    </Router>
}