import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'
import { dbStore } from '../../fbase'
import { Container, Inner } from '../../style'

export default ({content, dispatch, onChangeValue, onSubmitVlaue, currentUser}) => {
  const { isLogin } = useSelector(state => state.auth)
  const { uid, displayName } = currentUser
  const histoyr = useHistory()
  const onChange = (e) => {
    const { value } = e.target;
    dispatch(onChangeValue(value))
  }
  const onClick = () => {
    dbStore.collection('contents').add({
      creatorId: uid,
      displayName,
      text: content
    })
    dispatch(onSubmitVlaue(''))
    histoyr.push("/")
  }
  const onSubmit = (e) => {
    e.preventDefault()
  }
  if(isLogin){
    return (
      <Container>
        <Inner>
          <form onSubmit={onSubmit}>
            <input type="text" value={content} onChange={onChange} />
          </form>
          <button onClick={onClick}>완료</button>
          <Link to="/">취소</Link>
        </Inner>
      </Container>
    )
  }
  if(!isLogin){
    return (
      <Container>
        <Inner>
          <p>로그인 후 작성이 가능합니다.</p>
          <Link to="/auth">로그인하로 가기</Link>
        </Inner>
      </Container>
    )
  }
  
}