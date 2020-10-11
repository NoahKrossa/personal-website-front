import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

/** VIEWS */
import HomeView from './views/Home/Home.view'
import AboutView from './views/About/About.view'
import BlogView from './views/Blog/Blog.view'
import BlogCategoryView from './views/BlogCategory/BlogCategotyView.view'


export default class Router extends Component {
  render() {
    return (
      <>
        <Route path="/" exact component={HomeView} />
        <Route path="/about" exact component={AboutView} />
        <Route path="/blog" exact  component={BlogView} />
        <Route path="/blog/category/:category" exact component={BlogCategoryView} />
      </>
    )
  }
}
