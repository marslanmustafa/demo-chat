import Image from 'next/image'
import Header from './Header'
import Buttons from './Buttons'

const Settings = () => {
  return (
    <div  className='relative w-[23%] h-screen shadow-lg overflow-hidden'>
      <Header/>
      <div className="mt-24 h-[calc(100vh-96px)] py-1 px-2 overflow-scroll">

      <div className='w-full h-16 bg-white py-2 px-3 flex items-center justify-start gap-2'>
      <div className='w-16 h-16 flex items-center justify-center rounded-full'>
        <Image
        src={"/profileImg.jpg"}
        width={64}
        height={64}
        alt=''
         />
      </div>
      <div className='h-fit'> 
        <h1 className="font-bold text-lg" >Lindsy Smith</h1>
        <h2 className='text-xs flex items-center  gap-2'> <div className='w-2 h-2 bg-green-700 rounded-full'></div> available</h2>
      </div>
    </div>
    <Buttons/>
    </div>
    </div>
  )
}

export default Settings