import React from 'react'
import AppWrapper from './AppWrapper'
import { BrowserRouter as Router } from 'react-router-dom'
import { Authenticator } from 'aws-amplify-react'
import Default from './components/Default'
import Header from './scenes/Header'
import Footer from './scenes/Footer'
import './App.css'
function App() {
  return (
    <div className='App'>
      <Router>
        <Authenticator hideDefault>
          <Header />
          <AppWrapper />
          <Default />
          <Footer />
        </Authenticator>
      </Router>
    </div>
  )
}

export default App
