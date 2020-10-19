import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onGetContent, onStartLoading, onEndLoading } from '../store/modules/home'
import Home from '../components/Home/Home'
import { dbStore } from '../fbase'
export default () => {
  const { contents, isLoading } = useSelector(state => state.home);
  const { currentUser } = useSelector(state => state.auth);
  const disPatch = useDispatch();
  useEffect(() => {
    // disPatch(onStartLoading())
    dbStore.collection('contents').onSnapshot(response => {
      const result = response.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      disPatch(onGetContent(result))
    })
    disPatch(onEndLoading())
  },[])
  return isLoading ? <div>로딩중</div> 
  : <Home contents={contents} currentUser={currentUser} />
}