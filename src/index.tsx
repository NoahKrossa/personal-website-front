import { get } from 'got'
import React from 'react'
import ReactDOM from 'react-dom'
import AppComponent from './App.component'
import { loggin, getAllPosts } from './services/api.service'

// Logging to API
loggin()
getAllPosts()
ReactDOM.render(<AppComponent />, document.getElementById('root'))
