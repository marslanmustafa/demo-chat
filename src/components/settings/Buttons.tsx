import { SquareAsterisk, CalendarClock, Laptop, MessageSquareMore, KeyRound, RotateCw,BellRing  } from 'lucide-react'
const Buttons = () => {
  return (
    <div className='w-full bg-white py-3 px-5 gap-5 flex items-center justify-center flex-col'>
      <div className='w-full bg-white gap-3 flex items-center'>
        <div className='w-5 h-5 flex items-center justify-center rounded-sm bg-gradient-to-t to-gradientTo from-gradientFrom text-white'>
          <SquareAsterisk size={14}/>
        </div>
        <h1 className='text-darkGrey' >My Number</h1>
      </div>
      <div className='w-full bg-white gap-3 flex items-center'>
        <div className='w-5 h-5 flex items-center justify-center rounded-sm bg-gradient-to-t to-gradientTo from-gradientFrom text-white'>
          <CalendarClock size={14}/>
        </div>
        <h1 className='text-darkGrey' >Subscription</h1>
      </div>
      <div className='w-full bg-white gap-3 flex items-center'>
        <div className='w-5 h-5 flex items-center justify-center rounded-sm bg-gradient-to-t to-gradientTo from-gradientFrom text-white'>
          <Laptop size={14}/>
        </div>
        <h1 className='text-darkGrey' >Call Handling</h1>
      </div>
      <div className='w-full bg-white gap-3 flex items-center'>
        <div className='w-5 h-5 flex items-center justify-center rounded-sm bg-gradient-to-t to-gradientTo from-gradientFrom text-white'>
          <MessageSquareMore size={14}/>
        </div>
        <h1 className='text-darkGrey' >SMS settings</h1>
      </div>
      <div className='w-full bg-white gap-3 flex items-center'>
        <div className='w-5 h-5 flex items-center justify-center rounded-sm bg-gradient-to-t to-gradientTo from-gradientFrom text-white'>
          <KeyRound size={14}/>
        </div>
        <h1 className='text-darkGrey' >Security</h1>
      </div>
      <div className='w-full bg-white gap-3 flex items-center'>
        <div className='w-5 h-5 flex items-center justify-center rounded-sm bg-gradient-to-t to-gradientTo from-gradientFrom text-white'>
          <RotateCw size={14}/>
        </div>
        <h1 className='text-darkGrey' >Backup</h1>
      </div>
      <div className='w-full bg-white gap-3 flex items-center'>
        <div className='w-5 h-5 flex items-center justify-center rounded-sm bg-gradient-to-t to-gradientTo from-gradientFrom text-white'>
          <BellRing size={14}/>
        </div>
        <h1 className='text-darkGrey' >Notification</h1>
      </div>
    </div>
  );
};

export default Buttons;
