import React from 'react';
import { Link, useHistory } from 'react-router-dom'
import { dbStore } from '../../fbase'
export default ({content, dispatch, onChangeValue, onSubmitVlaue}) => {
  const histoyr = useHistory()
  const onChange = (e) => {
    const { value } = e.target;
    dispatch(onChangeValue(value))
  }
  const onClick = () => {
    dbStore.collection('contents').add({
      text: content
    })
    dispatch(onSubmitVlaue(''))
    histoyr.push("/")
  }
  const onSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={content} onChange={onChange} />
      </form>
      <button onClick={onClick}>완료</button>
      <Link to="/">취소</Link>
    </div>
  )
}