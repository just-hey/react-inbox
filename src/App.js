import React, { Component } from 'react'
import './App.css'
import Toolbar from './components/Toolbar'
import Data from './seeds/Data'

class App extends Component {
  render() {
    console.log(Data)
    return (
      <div className="App container">
        <Toolbar />
      </div>
    )
  }
}

export default App
