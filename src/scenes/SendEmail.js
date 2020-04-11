import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { sendEmail } from 'api/email'
import './email.scss'

function Default() {
  return (
    <div className='email'>
      <div className='wrapper'>
        <Form>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Topic</Form.Label>
            <Form.Control type='text' placeholder='Enter topic' />
          </Form.Group>
          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Content</Form.Label>
            <Form.Control type='text' placeholder='Something' />
          </Form.Group>
          <Button
            onClick={() => {
              sendEmail({ subject: 'test', text: 'test' })
            }}
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default Default
