// @ts-nocheck
import { useState } from 'react';
import { CheckCheck } from 'lucide-react';
import message from '@/data/chat.json';

const Thread = () => {
  const messages = message.chat.messages;

  const isTodayOrYesterday = (dateString) => {
    const messageDate = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    const isSameYear = messageDate.getFullYear() === today.getFullYear();
    const isSameMonth = messageDate.getMonth() === today.getMonth();
    const isSameDay = messageDate.getDate() === today.getDate();
    const isYesterday = messageDate.getDate() === yesterday.getDate();
    return (isSameYear && isSameMonth && isSameDay) ? 'Today' : (isYesterday ? 'Yesterday' : messageDate.toLocaleDateString());
  };

  return (
    <div className="p-4 w-full h-[calc(100vh-144px)] overflow-scroll mt-16 mb-20 bg-white">
      <h1 className="p-2 text-sm flex items-center justify-center rounded-full text-darkGrey text-center">
        {isTodayOrYesterday(messages[0].messages[0].timestamp)}
      </h1>

      <div className="w-full">
        <div className="flex flex-col">
          {messages.map((participantMessages, index) => (
            <div key={index} className="flex flex-col">
              {participantMessages.messages.map((message, msgIndex) => (
                <div
                  key={msgIndex}
                  className={`m-2  flex flex-col items-${participantMessages.sender === 'User1' ? 'start' : 'end'}`}
                >
                     <div
                      className={`text-xs px-5 py-2 ${participantMessages.sender === 'User1' ? 'bg-gray-300 text-black' :"bg-gradient-to-t to-gradientTo from-gradientFrom" } w-72 text-white flex flex-col gap-2 ${
                        msgIndex === 0 ? 'rounded-t-full rounded-bl-full' : ''} ${msgIndex === participantMessages.messages.length - 1 ? 'rounded-b-full rounded-tl-full' : ''} ${msgIndex > 0  ? 'rounded-l-full' : ''}`}
                    >
                      <p className='w-full'>{message.content}</p>
                      <p className={`text-xs text-white w-fit text-right  ${participantMessages.sender === 'User1' && ' text-black'}`}>{new Date(message.timestamp).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}</p>
                    </div>
                    {participantMessages.sender === 'User2' && msgIndex === participantMessages.messages.length - 1 &&
                    <span className={`${message.read ? "text-blue-400" : "text-gray-400"}`} ><CheckCheck size={20} /></span>
                  } </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Thread;
