import React, { useState, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import { sendEmail } from 'api/email'
import './email.scss'

function Email() {
  const { email } = useSelector((state) => state.user)
  const [subject, setSubject] = useState()
  const [text, setText] = useState()

  const memoizedCallback = useCallback(() => {
    sendEmail({ subject, text, from: email })
  }, [subject, text, email])
  return (
    <div className='email'>
      <div className='wrapper'>
        <Form>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Topic</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter topic'
              onChange={(e) => setSubject(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Content</Form.Label>
            <Form.Control
              type='text'
              placeholder='Something'
              onChange={(e) => setText(e.target.value)}
            />
          </Form.Group>
          <Button onClick={memoizedCallback}>Submit</Button>
        </Form>
      </div>
    </div>
  )
}

export default Email
