import React from 'react'
import Message from './Message'

const MessageList = ({data, toggle}) => {
    return (
        data.map((email, i) => {
            return (
                <Message key={i} email={email} toggle={toggle}/>
            )
        })
    )
}

export default MessageList