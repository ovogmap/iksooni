import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { Navbar, UL, LI, Home } from './NavStyle'
import { Container } from '../../style'
export default () => {
  const { isLogin } = useSelector(state => state.auth)
  return (
    <Container>
      <Navbar>
        <Link to="/">
          <Home>Iksooni</Home>
        </Link>
        <UL>
          <LI>
            <Link to="/writing">글쓰기</Link>
          </LI>
          {isLogin 
          ? <LI>
              <Link to="/auth">프로필</Link>
            </LI>
          : <LI>
              <Link to="/auth">로그인</Link>
            </LI>

          }
        </UL>
      </Navbar>
    </Container>
  )
}