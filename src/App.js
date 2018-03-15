import React, { Component } from 'react'
import './App.css'
import Toolbar from './components/Toolbar'
import MessageList from './components/MessageList'
import Data from './seeds/Data'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { Data }
  }

  toggleStar = (e, id) => {
    let newState = [...this.state.Data]
    let index = newState.findIndex((message)=> message.id === id)
    newState[index].starred = !newState[index].starred 
    this.setState({Data: newState})
    // newState[i].starred ? this.setState(this.state.Data[i].starred: false) : this.setState(this.state.Data[i].starred: true)
  }

  render() {

    let counter = 0
    this.state.Data.forEach(el => {
      if (el.read === true) counter++
    })

    return (
      <div className="App container-fluid">
        <Toolbar counter={counter}/>
        <MessageList data={this.state.Data} toggle={this.toggleStar} />
      </div>
    )
  }

}

export default App
