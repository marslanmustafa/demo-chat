import { EllipsisVertical, Phone } from "lucide-react"
import Image from "next/image"

const Header = () => {
  return (
    <div className="absolute top-0 left-0 bg-white w-full h-16 shadow-lg flex item-center justify-end px-3">
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
        <h2 className='text-xs flex items-center  gap-2'>Last seen at 2:34 PM</h2>
      </div>
    </div>
      <div className="flex items-center justify-center gap-3" >
        <div className="w-9 h-9 flex items-center justify-center text-gray-400" >
          <Phone size={28} fill="#9ca3af"strokeWidth={0}/>
        </div>
        <div className="w-9 h-9 flex items-center justify-center text-gray-400" >
          <EllipsisVertical size={28} fill="#9ca3af"strokeWidth={2}/>
        </div>
      </div>
    </div>
  )
}

export default Header