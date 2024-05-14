import { ArrowLeft, MessageSquareText, Phone } from "lucide-react"

const Header = () => {
  return (
    <div className="absolute top-0 left-0 bg-gradient-to-t to-gradientTo from-gradientFrom w-full h-24 shadow-xl flex items-end py-3 justify-start px-3">
      <div className="flex items-center justify-center gap-3" >
        <div className="w-8 h-8 flex items-center justify-center text-white" >
          <ArrowLeft size={24}/>
        </div>
        <h1 className="text-lg text-white">Settings</h1>
      </div>
    </div>
  )
}

export default Header