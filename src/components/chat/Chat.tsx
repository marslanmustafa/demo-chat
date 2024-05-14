import React from 'react'
import Header from './Header'
import MsgInput from './MsgInput'
import Thread from './Thread'

const Chat = () => {
  return (
    <div  className='relative h-full w-[53%]' >
      <Header/>
      <Thread/>
      <MsgInput/>
    </div>
  )
}

export default Chat