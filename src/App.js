import React, { Component } from 'react'
import './App.css'
import Toolbar from './components/Toolbar'
import MessageList from './components/MessageList'
import Data from './seeds/Data'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { Data, selected: [] }
  }

  toggleSelected = (e, id) => {
    let newState = [...this.state.selected]
    newState.includes(id) ? newState.splice(newState.indexOf(id), 1) : newState.push(id)
    this.setState({ selected: newState })
  } 

  selectAll = () => {
    let newState = [...this.state.selected]
    if (newState.length === this.state.Data.length) {
      newState = []
    } else {
      newState = this.state.Data.map(email => email.id)
    }
    this.setState({ selected: newState })
  }

  markAsRead = (theSelectedList) => {
    console.log(theSelectedList)
    let newState = [...this.state.Data]
    newState.forEach(email => {
      if (theSelectedList.includes(email.id)) email.read = true
    })
    this.setState({Data: newState})
  }

  markAsUnread = (theSelectedList) => {
    let newState = [...this.state.Data]
    newState.forEach(email => {
      if (theSelectedList.includes(email.id)) email.read = false
    })
    this.setState({Data: newState})
  }

  toggleStar = (e, id) => {
    let newState = [...this.state.Data]
    let index = newState.findIndex((message)=> message.id === id)
    newState[index].starred = !newState[index].starred 
    this.setState({ Data: newState })
  }

  render() {

    let counter = 0
    this.state.Data.forEach(el => {
      if (el.read === false) counter++
    })

    return (
      <div className="App container-fluid">
        <Toolbar 
          counter={counter} 
          selectAll={this.selectAll} 
          selectedList={this.state.selected} 
          markAsRead={this.markAsRead}
          markAsUnread={this.markAsUnread}
        />
        <MessageList 
          data={this.state.Data} 
          toggle={this.toggleStar} 
          selectedList={this.state.selected} 
          togSelect={this.toggleSelected} 
        />
      </div>
    )
  }

}

export default App
