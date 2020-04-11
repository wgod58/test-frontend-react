import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Auth } from 'aws-amplify'

const Header = (props) => {
  const { authState } = props

  return (
    <Navbar bg='secondary' expand='lg'>
      <Navbar.Brand href='#home'>
        <img
          alt=''
          src='/logo.svg'
          width='50'
          height='50'
          className='d-inline-block align-top'
        />
        React Bootstrap
      </Navbar.Brand>
      {authState === 'signedIn' && (
        <Nav className='mr-auto'>
          <Nav>
            <Nav.Item className='mx-2'>
              <Link to='/'>Home</Link>
            </Nav.Item>
          </Nav>
          <Nav>
            <Nav.Item className='mx-2'>
              <Link to='/send-email'>send-mail</Link>
            </Nav.Item>
          </Nav>
        </Nav>
      )}
      {authState === 'signIn' && (
        <Nav className='ml-auto'>
          <Button onClick={() => Auth.federatedSignIn({ provider: 'Google' })}>
            Login
          </Button>
        </Nav>
      )}
      {authState === 'signedIn' && (
        <Nav>
          <Button onClick={() => Auth.signOut()}>Logout</Button>
        </Nav>
      )}
    </Navbar>
  )
}
export default Header
