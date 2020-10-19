import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { onChangeEmail, onClearInputs, onChangePassword, onChangeNickName, onErroe, onCurrUser, onLogin, onLogout } from '../../store/modules/auth'
import { authServise } from '../../fbase'
import { useHistory } from 'react-router-dom'
import { Container} from '../../style'
import { Inner, Form } from './AuthStyle'
import Header from '../Header/Header'

export default () => {
  const { currentUser, error, isLogin } = useSelector(state => state.auth)
  const { email, password, displayName } = useSelector(state => state.auth.inputs)
  const [newAccount, setNewAccount] = useState(false);
  const disPatch = useDispatch()
  const history = useHistory()
  const onChange = (e) => {
    const { name, value } = e.target;
    if(name === 'email'){
      disPatch(onChangeEmail(value))
    } else if(name === 'password'){
      disPatch(onChangePassword(value))
    } else if(name === 'displayName'){
      disPatch(onChangeNickName(value))
    }
  }
  const createNickName = async (user) => {
    await user.user.updateProfile({
      displayName: displayName
    })
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      let user;
      if(newAccount){
          user = await authServise.createUserWithEmailAndPassword(
          email,
          password
        );
        createNickName(user)
        disPatch(onClearInputs())
        // history.push("/")
      } else {
        user = await authServise.signInWithEmailAndPassword(email, password);
        disPatch(onClearInputs())
        // history.push("/");
      }
    } catch(e) {
      disPatch(onErroe(e))
    }
  }
  const onClick = () => {
    authServise.signOut()
    disPatch(onLogout())
    const logoutUser = {
      uid: '',
        email: '',
        displayName: ''
    }
    disPatch(onCurrUser(logoutUser))
  }
  if(isLogin){
    return (
      <Container>
        <Header/>
        <Inner>
          <p>{currentUser.displayName}</p>
          <button onClick={onClick}>로그아웃</button>
        </Inner>
      </Container>
    )
  }
  if(!isLogin){
    return (
      <Container>
        <Header/>
        <Inner>
          <Form onSubmit={onSubmit}>
            <input name="email" type="text" onChange={onChange} value={email} />
            <input name="password" type="password" onChange={onChange} value={password} />
            {newAccount && <input name="displayName" type="text" onChange={onChange} value={displayName} />}
            <input type="submit" value={newAccount ? "회원가입" : "로그인"}/>
          </Form>
          <p onClick={()=>{setNewAccount(!newAccount)}}>{!newAccount ? "회원가입" : "로그인"}</p>
          {error && <p>error</p>}
        </Inner>
      </Container>
    )
  }
}