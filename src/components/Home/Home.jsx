import React from 'react';
import Contents from '../contents/Contents'
import Header from '../Header/Header'
import { Container, Inner } from '../../style'
import { ContentInner } from './HomeStyle'

export default ({ contents, currentUser }) => {
  return (
    <Container>
      <Header />
      <Inner>
        <ContentInner>
        {contents.map((content, i) => {
          return <Contents key={i} content={content} currentUser={currentUser} />
        })}
        </ContentInner>
      </Inner>
    </Container>
    )
}