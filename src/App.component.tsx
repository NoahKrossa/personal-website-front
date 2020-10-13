import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './styles/main.scss'
import NavegationComponent from './components/Navegation/Navegation.component'
import Routes from './routes'

export default class AppComponent extends Component {
  render() {
    return (
      <>
        <Router>
          <header>
            <NavegationComponent />
          </header>
          <div className="container-separator" />
          <main className="container">
            <Routes />
          </main>
        </Router>
      </>
    )
  }
}
