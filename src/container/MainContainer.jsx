import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onGetContent, onStartLoading, onEndLoading } from '../store/modules/main'
import Main from '../components/main/Main'
import { dbStore } from '../fbase'
export default () => {
  const { contents, isLoading } = useSelector(state => state.main);
  const disPatch = useDispatch();
  useEffect(() => {
    disPatch(onStartLoading())
    dbStore.collection('contents').onSnapshot(response => {
      const result = response.docs.map((doc) => ({
        ...doc.data(),
      }));
      disPatch(onGetContent(result))
      disPatch(onEndLoading())
    })
  },[])
  return <Main contents={contents} isLoading={isLoading} />
}