import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

export default ({contents, isLoading}) => {
  const [index, setIndex] = useState(Math.floor(Math.random() * contents?.length))
  const [changeIndex,setChangeIndex] = useState(true)
  const onClick = () => {
    setChangeIndex(!changeIndex)
  }
  useEffect(() => {
    setIndex(Math.floor(Math.random() * contents?.length))
    console.log('Effect')
  }, [changeIndex])
  return isLoading ? <div>로딩중</div> 
  : (
    <div>
      <p>{contents[index]?.text}</p>
      <button onClick={onClick}>다른글 보기</button>
      <Link to="/writing">글쓰기</Link>
    </div>
  )
}