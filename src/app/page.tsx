
// import Link from "next/link";
// import { User, Heart, ShoppingBag, LogOut } from "lucide-react";
// import Image from "next/image";

import Chat from "@/components/chat/Chat";
import Messages from "@/components/messages/Messages";
import Settings from "@/components/settings/Settings";



const page: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Messages />
      <Chat/>
      <Settings/>
    </div>
  );
};

export default page;
