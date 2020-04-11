import React from 'react'
import { Card } from 'react-bootstrap'

const Footer = () => {
  return (
    <div id='footer'>
      <Card.Footer className='text-muted'>
        <div>Made by Zed Pai</div>
        <div>
          <a href='https://www.linkedin.com/in/zed-pai-077989155/'>
            <i className='fab fa-linkedin fa-2x' />
          </a>
        </div>
      </Card.Footer>
    </div>
  )
}
export default Footer
