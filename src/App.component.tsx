import React, { Component } from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import './styles/main.scss'
import NavegationComponent from './components/Navegation/Navegation.component'
import Routes from './routes'

export default class AppComponent extends Component {
  render() {
    return <>
      <Router>
        <NavegationComponent/>
        <div className="container-separator"/>
        <Routes/>
      </Router>
    </> 
  }
}