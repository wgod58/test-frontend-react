import React from 'react'
import { AuthPiece } from 'aws-amplify-react'
import { Route, Switch } from 'react-router-dom'
import { Auth, Hub } from 'aws-amplify'
import SendEmail from 'scenes/SendEmail'
import { setUser } from 'store/actions'
import logo from './logo.svg'

class AppWrapper extends AuthPiece {
  constructor(props) {
    super(props)
    this.state = {
      animation: 'push',
      direction: 'left',
      dimmed: false,
      visible: true,
      email: null,
    }
    this._validAuthStates = ['signedIn']
    this.initial = this.initial.bind(this)
    this.navRef = {}
  }

  componentDidMount() {
    this.initial()
    Hub.listen('auth', () => {
      this.initial()
    })
  }

  async initial() {
    try {
      const {
        attributes: { sub, email },
      } = await Auth.currentUserInfo()
      setUser({ email, sub })
      this.setState({ email })
    } catch (error) {}
  }

  showComponent() {
    const { email } = this.state
    return (
      <>
        <div>
          <Switch>
            <Route path='/send-email'>
              <SendEmail />
            </Route>
            <Route path='/'>
              <img src={logo} className='App-logo' alt='logo' />
              <p>Hello {email}</p>
            </Route>
          </Switch>
        </div>
      </>
    )
  }
}

export default AppWrapper
