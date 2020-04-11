import React from 'react'
import { Image, Alert } from 'react-bootstrap'

function Default(props) {
  const { authState } = props
  return authState === 'signIn' ? (
    <div className='App'>
      <Alert variant='info'>Please sign in first.</Alert>
      <Image fluid src='https://picsum.photos/700' alt='logo' />
    </div>
  ) : null
}

export default Default
