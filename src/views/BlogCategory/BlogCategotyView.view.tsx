import React, { Component } from 'react'

export default class BlogCategoryView extends Component<{ match: any }, {}> {
  render() {
    const { category } = this.props.match.params
    console.log(category)
    return (
      <>
        <h1>Blog category view work!</h1>
        <h1>Context category: {category}</h1>
      </>
    )
  }
}
