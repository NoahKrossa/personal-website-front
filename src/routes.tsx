import React, { Component, ReactNode } from 'react'
import { Route } from 'react-router-dom'

/** VIEWS */
import HomeView from './views/Home/Home.view'
import AboutView from './views/About/About.view'
import BlogView from './views/Blog/Blog.view'
import BlogCategoryView from './views/BlogCategory/BlogCategotyView.view'
import PostView from './views/Post/Post.view'

export default class Router extends Component {
  render(): ReactNode {
    return (
      <>
        <Route path="/" exact component={HomeView} />
        <Route path="/about" exact component={AboutView} />
        <Route path="/blog" exact component={BlogView} />
        <Route
          path="/blog/category/:category"
          exact
          component={BlogCategoryView}
        />
        <Route path="/post/" exact component={PostView} />
      </>
    )
  }
}
