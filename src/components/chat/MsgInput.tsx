import { CalendarClock, Mic, Paperclip, SendHorizontal, Smile } from 'lucide-react'
import React from 'react'

const MsgInput = () => {
  return (
    <div className='w-full h-20 absolute left-0 bottom-0 p-3 flex items-center justify-between gap-4' >
      <div className="flex items-center justify-center gap-3" >
        <div className="w-9 h-9 flex items-center justify-center text-gray-400" >
          <Paperclip size={24} />
        </div>
        <div className="w-9 h-9 flex items-center justify-center text-gray-400" >
          <CalendarClock size={24} />
        </div>
      </div>
      <div className='p-2 relative w-full h-full  flex items-center bg-gray-100 overflow-hidden rounded-lg'>
        <textarea className='w-full text-sm border-0 outline-none pt-5 bg-gray-100 ' name="msgInput" placeholder='Type Your Message Here' ></textarea>
      <div className="absolute top-0 right-2 h-full flex items-center justify-center gap-3" >
        <div className="w-6 h-6 flex items-center justify-center text-gray-400" >
          <Smile size={20} />
        </div>
        <div className="w-6 h-6 flex items-center justify-center text-gray-400" >
          <Mic size={20} />
        </div>
      </div>
      </div>
      <div className="flex items-center justify-center gap-3" >
        <div className="w-9 h-9 flex items-center justify-center text-white bg-gradient-to-t to-gradientTo from-gradientFrom rounded-full" >
          <SendHorizontal size={20} />
        </div>
      </div>
    </div>
  )
}

export default MsgInput