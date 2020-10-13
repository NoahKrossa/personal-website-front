import React, { Component, ReactNode } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import './styles/main.scss'
import NavegationComponent from './components/Navegation/Navegation.component'
import Routes from './routes'

export default class AppComponent extends Component {
  render(): ReactNode {
    return (
      <>
        <Router>
          <header>
            <NavegationComponent />
          </header>
          <div className="container-separator" />
          <main className="container">
            <Switch>
              <Routes />
            </Switch>
          </main>
        </Router>
      </>
    )
  }
}
