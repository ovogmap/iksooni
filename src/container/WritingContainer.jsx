import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onChangeValue, onSubmitVlaue } from '../store/modules/writing'
import Writing from '../components/writing/Writing'

export default () => {
  const { content } = useSelector(state => state.writing)
  const dispatch = useDispatch()
  return <Writing content={content} dispatch={dispatch} onSubmitVlaue={onSubmitVlaue} onChangeValue={onChangeValue} />
}