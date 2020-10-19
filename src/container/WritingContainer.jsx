import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onChangeValue, onSubmitVlaue } from '../store/modules/writing'
import Writing from '../components/writing/Writing'
import Header from '../components/Header/Header'

export default () => {
  const { content } = useSelector(state => state.writing)
  const { currentUser } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  return (
    <>
      <Header/>
      <Writing content={content} currentUser={currentUser} dispatch={dispatch} onSubmitVlaue={onSubmitVlaue} onChangeValue={onChangeValue} />
    </>
  )

}