import React, { Component } from 'react'
import './App.css'
import Toolbar from './components/Toolbar'
import MessageList from './components/MessageList'
// import Data from './seeds/Data'
// import axios from 'axios'

const baseURL = `http://localhost:8082/api`

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { Data: [], selected: [] }
  }

  async getMessages () {
    let response = await fetch(`${baseURL}/messages`)
    let messages = await response.json()
    this.setState({ Data: messages._embedded.messages })
  }

  componentDidMount () {
    this.getMessages()
  }

  // MAKING A PATCH CALL WITH INFO THEN RE SETTING STATE WITH RESPONSE TO POST CALL
  // async patchRoute (arrayOfIDs, command (str), message, req.body) {


  //   let response = fetch(`${baseURL}/messages`, {
  //     method: 'PATCH',
  //     body: JSON.stringify(),
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //     }
  //   })
  //   const updated = await response.json()
  //   this.setState({ Data: updated})
  // }

  // MAKING POST CALL 
  // async postRoute (infoObj) {
      // let response = fetch(`${baseURL}/messages`, {
      //     method: 'POST',
      //     body: JSON.stringify(infoObj),
      //     headers: {
      //       'Content-Type': 'application/json',
      //       'Accept': 'application/json',
      //     }
      //   })
      //   const updated = await response.json()
      //   this.setState({ Data: updated})
  // }

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

  removedSelected = (theSelectedList) => {
    let tempState = [...this.state.Data]
    let newState = tempState.filter(email => {
      return !theSelectedList.includes(email.id)
    })
    this.setState({ Data: newState })
  }

  addLabel = (theSelectedList, label) => {
    let tempState = [...this.state.Data]
    let newState = []
    tempState.map(email => {
      if (theSelectedList.includes(email.id) && !email.labels.includes(label) && label !== "Apply label") {
        email.labels.push(label)
      }
      return newState.push(email)
    })
    this.setState({ Data: newState })
  }

  removeLabel = (theSelectedList, label) => {
    let tempState = [...this.state.Data]
    let newState = []
    tempState.map(email => {
      if (theSelectedList.includes(email.id) && email.labels.includes(label)) {
        let index = email.labels.indexOf(label)
        email.labels.splice(index,1)
      }
      return newState.push(email)
    })
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
          data={this.state.Data} 
          counter={counter} 
          selectAll={this.selectAll} 
          selectedList={this.state.selected} 
          markAsRead={this.markAsRead}
          markAsUnread={this.markAsUnread}
          removedSelected={this.removedSelected}
          addLabel={this.addLabel}
          removeLabel={this.removeLabel}
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
