// @ts-nocheck
const Message = ({ senderInitials, senderName, messageContent, timestamp, unreadMessages }) => {
  return (
    <div className='rounded-xl w-full h-16 bg-white shadow-lg py-3 px-2 grid grid-cols-6 gap-2 items-center'>
      <div className='w-full h-full flex items-center justify-center'>
        <h1 className='w-8 h-8 text-sm bg-gradient-to-t to-gradientTo from-gradientFrom flex items-center justify-center p-2 rounded-full text-white font-bold text-center'>
          {senderInitials}
        </h1>
      </div>
      <div className='col-span-4 text-[10px] h-fit'> 
        <h1 className="font-bold" >{senderName}</h1>
        <h2>{messageContent.length > 29 ? (messageContent.substring(0, 28) + '...') : messageContent}</h2>
      </div>
      <div className='flex items-center justify-center gap-1 flex-col text-darkGrey font-bold text-center text-[8px]'>
        <h1 className=''>
          {timestamp}
        </h1>
        <div className='w-5 h-5 bg-gradient-to-t to-gradientTo from-gradientFrom flex items-center justify-center p-2 rounded-full m-auto text-white'>
          {unreadMessages}
        </div>
      </div>
    </div>
  );
};

export default Message;
