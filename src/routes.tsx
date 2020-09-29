import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

/** VIEWS */
import HomeView from './views/Home/Home.view'
import AboutView from './views/About/About.view'

export default class Router extends Component {
  render() {
    return (
      <>
        <Route path="/" exact component={HomeView} />
        <Route path="/about" exact component={AboutView} />
        <Route path="/about/:name" component={AboutView} />
      </>
    )
  }
}
