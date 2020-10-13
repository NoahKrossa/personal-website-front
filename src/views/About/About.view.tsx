import React, { Component } from 'react'

export interface AboutViewProps {
  match: any
}
export default class AboutView extends Component<AboutViewProps, {}> {
  render() {
    const { name } = this.props.match.params
    return (
      <>
        <h1>About {name}</h1>
      </>
    )
  }
}
