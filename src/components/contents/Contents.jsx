import React, { useState } from 'react';
import { dbStore } from '../../fbase';
import { Itembox, Btnbox, Button, Textbox, Namebox, Form } from './ContentsStyle'

export default ({ currentUser, content }) => {
  const [editing, setEditing] = useState(false);
  const [newText, setNewText] = useState(content.text)
  const onClickDelete = async (id) => {
    const ok = window.confirm('삭제 하시겠습니까 ?')
    if(ok){
      await dbStore.doc(`contents/${id}`).delete()
    }
  }
  const onChange = (e) => {
    const { value } = e.target;
    setNewText(value)
  }
  const toggleEditin = () => setEditing(!editing);
  const onSubmit = async (e) => {
    e.preventDefault()
    await dbStore.doc(`contents/${content.id}`).update({
      text: newText
    })
    setEditing(false)
  }
  const onClick = () => {
    setEditing(false)
  }
  return (
    <>
      { editing ? (
        <>
          {currentUser.uid === content.creatorId && (
            <Itembox>
              <Form onSubmit={onSubmit}>
                <input type="text" value={newText} required onChange={onChange}/>
                <Btnbox>
                  <input type="submit" value="완료" />
                  <input type="button" value="취소" onClick={onClick} />
                </Btnbox>
              </Form>
            </Itembox>
          )}
        </>
      ) 
      :
      (
        <Itembox>
          <Textbox>{content.text}</Textbox>
          <Namebox>{content.displayName}</Namebox>
          {currentUser.uid === content.creatorId ?
          <Btnbox>
            <Button onClick={()=>{onClickDelete(content.id)}}>삭제</Button>
            <Button onClick={()=>{toggleEditin()}}>수정</Button>
          </Btnbox>
          : null
          }
        </Itembox>
      )}
    </>
  )
}