import { ChevronDown } from "lucide-react";
import Header from "./Header";
import Searchbar from "./Searchbar";
import Message from "./Message";
import messages from "@/data/messages.json"
const Messages = () => {
  return (
    <div className="relative w-[24%] h-screen ">
      <Header />
      <div className="mt-16 h-[calc(100vh-64px)] py-3 px-6 bg-gray-100 overflow-scroll">
        <div className="py-3">
          <button
            type="button"
            className="text-xs bg-gradient-to-t to-gradientTo from-gradientFrom rounded-full outline-none text-white px-3 py-1 border border- flex items-center justify-between gap-2"
          >
            All Numbers <ChevronDown size={14} />
          </button>
        </div>
        <Searchbar />
        <div className="w-full flex items-center justify-start gap-3 py-3 text-xs">
        <button
            type="button"
            className=" bg-gradient-to-t to-[#B73CCD] from-[#735EE9] rounded-full outline-none p-[2px]"
          >
            <div className="text-darkGrey px-3 py-1 rounded-full text-white">
              All
            </div>
            </button>
          <button
            type="button"
            className=" bg-gradient-to-t to-[#B73CCD] from-[#735EE9] rounded-full outline-none text-white p-[2px]"
          >
            <div className="text-darkGrey bg-white px-3 py-1 rounded-full">
              Sheduled
            </div>
          </button>
          <button
            type="button"
            className="bg-gradient-to-t to-[#B73CCD] from-[#735EE9] rounded-full outline-none text-white p-[2px]"
          >
            <div className="text-darkGrey bg-white px-3 py-1 rounded-full">
              Broadcast
            </div>
          </button>
        </div>
        <div className="py-2 flex items-center justify-center gap-3 flex-col">
          {messages && messages.map((message, index) => (
            <Message key={index} {...message} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Messages;
