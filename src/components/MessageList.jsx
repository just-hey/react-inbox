import React from 'react'
import Message from './Message'

const MessageList = ({data, toggle, selectedList, togSelect}) => {
    return (

        data.map((email, i) => {
            let isSelected = selectedList.includes(email.id)
            return (
                <Message key={i} email={email} toggle={toggle} isSelected={isSelected} togSelect={togSelect}/>
            )
        })
    )
}

export default MessageList